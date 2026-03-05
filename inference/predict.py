import torch
import torch.nn.functional as F
from PIL import Image

from models.model import get_model
from preprocessing.transforms import transform

# load model
model = get_model(num_classes=2)
model.load_state_dict(torch.load("saved_models/fire_model.pth"))
model.eval()


def predict_image(image_path):

    # open image
    image = Image.open(image_path).convert("RGB")

    # apply preprocessing
    image = transform(image)

    # add batch dimension
    image = image.unsqueeze(0)

    # prediction
    with torch.no_grad():

        outputs = model(image)

        probabilities = F.softmax(outputs, dim=1)

        confidence, predicted = torch.max(probabilities, 1)

    classes = ["fire", "nofire"]

    return classes[predicted.item()], confidence.item()