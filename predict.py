import torch
import torch.nn.functional as F
from torchvision import transforms
from PIL import Image
from model import get_model

# Device configuration
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Load trained model (only once)
model = get_model(2)
model.load_state_dict(torch.load("fire_model.pth", map_location=device))
model.to(device)
model.eval()

# Image transform (must match training)
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])

# Class labels
classes = ["fire", "nofire"]


def predict_image(image_path):
    """
    Takes image path as input
    Returns prediction and confidence
    """
    # Load and preprocess image
    image = Image.open(image_path).convert("RGB")
    image = transform(image).unsqueeze(0).to(device)

    # Prediction
    with torch.no_grad():
        output = model(image)
        probabilities = F.softmax(output, dim=1)
        confidence, pred = torch.max(probabilities, 1)

    return {
        "prediction": classes[pred.item()],
        "confidence": round(confidence.item() * 100, 2)
    }