import torch
import torch.nn as nn
import torch.optim as optim

from models.model import get_model
from preprocessing.dataset_loader import load_dataset

# device
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

# dataset
train_loader = load_dataset("dataset/Forest Fire Dataset/Training")

# model
model = get_model(num_classes=2)
model = model.to(device)

# loss
criterion = nn.CrossEntropyLoss()

# optimizer
optimizer = optim.Adam(model.parameters(), lr=0.001)

epochs = 5

for epoch in range(epochs):

    running_loss = 0

    for images, labels in train_loader:

        images = images.to(device)
        labels = labels.to(device)

        outputs = model(images)

        loss = criterion(outputs, labels)

        optimizer.zero_grad()
        loss.backward()
        optimizer.step()

        running_loss += loss.item()

    print(f"Epoch {epoch+1}/{epochs}, Loss: {running_loss:.4f}")

# save model
torch.save(model.state_dict(), "saved_models/fire_model.pth")

print("Model saved successfully")