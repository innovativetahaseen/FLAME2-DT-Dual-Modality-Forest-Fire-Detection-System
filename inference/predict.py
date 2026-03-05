import torch
import torch.nn.functional as F
from PIL import Image

from models.model import get_model
from preprocessing.transforms import transform


# load trained model
model = get_model(num_classes=2)
model.load_state_dict(torch.load("saved_models/fire_model.pth", map_location=torch.device("cpu")))
model.eval()


classes = ["fire", "nofire"]


def predict_image(image_path):

    # open image
    image = Image.open(image_path).convert("RGB")

    # apply preprocessing
    image = transform(image)

    # add batch dimension
    image = image.unsqueeze(0)

    # inference
    with torch.no_grad():

        outputs = model(image)

        probabilities = F.softmax(outputs, dim=1)

        confidence, predicted = torch.max(probabilities, 1)

    result = {
        "prediction": classes[predicted.item()],
        "confidence": float(confidence.item())
    }

    return result


# test block
if __name__ == "__main__":

    image_path = "dataset/Forest Fire Dataset/Testing/fire/fire_0002.jpg"

    result = predict_image(image_path)

    print(result)