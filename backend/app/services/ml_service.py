from ml_model.model import predict

def run_detection(rgb_path, thermal_path):
    result = predict(rgb_path, thermal_path)
    return result