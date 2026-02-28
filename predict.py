# predict.py (optional)
from backend.app.services.ml_service import run_detection

def predict_image(path):
    return run_detection(path)