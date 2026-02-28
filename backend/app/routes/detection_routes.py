from flask import Blueprint, request, jsonify
from app.services.ml_service import run_detection
import os
from werkzeug.utils import secure_filename
import uuid

detection_bp = Blueprint('detection', __name__)


@detection_bp.route('/', methods=['GET'])
def home():
    return jsonify({
        "message": "FLAME2 Backend API Running",
        "available_routes": [
            "/api/health",
            "/api/detect"
        ]
    }), 200


@detection_bp.route('/api/detect', methods=['POST'])
def detect_fire():
    rgb = request.files.get('rgb_image')
    thermal = request.files.get('thermal_image')

   
    if not rgb or not thermal:
        return jsonify({"error": "Both images required"}), 400

    os.makedirs("uploads", exist_ok=True)

 
    rgb_filename = str(uuid.uuid4()) + "_" + secure_filename(rgb.filename)
    thermal_filename = str(uuid.uuid4()) + "_" + secure_filename(thermal.filename)

    rgb_path = os.path.join("uploads", rgb_filename)
    thermal_path = os.path.join("uploads", thermal_filename)


    rgb.save(rgb_path)
    thermal.save(thermal_path)

    result = run_detection(rgb_path, thermal_path)

    return jsonify(result), 200



@detection_bp.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        "status": "healthy",
        "message": "Backend running successfully"
    }), 200
