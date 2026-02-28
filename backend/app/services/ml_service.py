# backend/app/services/ml_service.py

import os
import sys
import threading
import torch
import torch.nn.functional as F
from PIL import Image
from torchvision import transforms

# 🔥 ADD PROJECT ROOT TO PYTHON PATH
ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../"))
sys.path.append(ROOT_DIR)

# 🔥 IMPORT FROM ROOT model.py
from model import get_model


# Model path (fire_model.pth should be in project root)
MODEL_PATH = os.path.join(ROOT_DIR, "fire_model.pth")

# Image transform (must match training)
_transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])

# Lazy-loaded singleton model
_model = None
_model_lock = threading.Lock()
_device = torch.device("cuda" if torch.cuda.is_available() else "cpu")


def _load_model():
    global _model
    with _model_lock:
        if _model is None:
            model = get_model(num_classes=2)

            if os.path.exists(MODEL_PATH):
                state = torch.load(MODEL_PATH, map_location=_device)
                model.load_state_dict(state)

            model.to(_device)
            model.eval()
            _model = model

    return _model


def _predict_tensor(tensor):
    model = _load_model()
    tensor = tensor.to(_device)

    with torch.no_grad():
        out = model(tensor.unsqueeze(0))
        probs = F.softmax(out, dim=1)
        confidence, pred = torch.max(probs, 1)

    classes = ["fire", "nofire"]

    return {
        "prediction": classes[pred.item()],
        "confidence": float(confidence.item() * 100)
    }


def run_detection(rgb_path, thermal_path=None):
    """
    rgb_path - path to RGB image saved on disk
    thermal_path - optional
    """
    img = Image.open(rgb_path).convert("RGB")
    tensor = _transform(img)

    return _predict_tensor(tensor)