import torch
from torchvision.datasets import ImageFolder
from torch.utils.data import DataLoader

from preprocessing.transforms import transform
from models.model import get_model
from utils.metrics import evaluate, plot_confusion_matrix


# load testing dataset
test_dataset = ImageFolder(
    root="dataset/Forest Fire Dataset/Testing",
    transform=transform
)

test_loader = DataLoader(
    test_dataset,
    batch_size=32,
    shuffle=False
)


# load trained model
model = get_model(num_classes=2)
model.load_state_dict(torch.load("saved_models/fire_model.pth"))
model.eval()


y_true = []
y_pred = []


# run inference on test dataset
with torch.no_grad():

    for images, labels in test_loader:

        outputs = model(images)

        _, predicted = torch.max(outputs, 1)

        y_true.extend(labels.tolist())
        y_pred.extend(predicted.tolist())


# compute metrics
accuracy, precision, recall, f1, cm = evaluate(y_true, y_pred)


print("\nModel Evaluation Results")
print("------------------------")

print("Accuracy :", accuracy)
print("Precision:", precision)
print("Recall   :", recall)
print("F1 Score :", f1)

print("\nConfusion Matrix:")
print(cm)


# show confusion matrix plot
plot_confusion_matrix(cm)