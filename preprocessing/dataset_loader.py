from torchvision.datasets import ImageFolder
from torch.utils.data import DataLoader
from preprocessing.transforms import transform


def load_dataset(data_dir):

    dataset = ImageFolder(
        root=data_dir,
        transform=transform
    )

    loader = DataLoader(
        dataset,
        batch_size=32,
        shuffle=True
    )

    return loader