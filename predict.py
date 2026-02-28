import torch
import torch.nn.functional as F
from torchvision import transforms
from PIL import Image
from model import get_model

# Device
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# Load trained model
model = get_model(2)
model.load_state_dict(torch.load("fire_model.pth", map_location=device))
model.to(device)
model.eval()

# Image transform (must match training)
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor()
])

# 🔥 PUT YOUR IMAGE PATH HERE
image_path = "/Users/shauryasinghal/Desktop/flame2-ml/dataset/Forest Fire Dataset/Training/fire/fire_0008.jpg"

# Load image
image = Image.open(image_path).convert("RGB")
image = transform(image).unsqueeze(0).to(device)

# Prediction
with torch.no_grad():
    output = model(image)
    probabilities = F.softmax(output, dim=1)
    confidence, pred = torch.max(probabilities, 1)

classes = ["fire", "nofire"]

print("\nPrediction:", classes[pred.item()])
print("Confidence: {:.2f}%".format(confidence.item() * 100))