from flask import Blueprint, request, jsonify, render_template
from app.services.ml_service import run_detection
import os
from werkzeug.utils import secure_filename
import uuid

detection_bp = Blueprint('detection', __name__)

# ✅ Serve frontend at "/"
@detection_bp.route("/")
def serve_index():
    return render_template("index.html")


# 🔥 Fire Detection API
@detection_bp.route("/api/detect", methods=["POST"])
def detect_fire():
    rgb = request.files.get("rgb_image")
    thermal = request.files.get("thermal_image")

    if not rgb or not thermal:
        return jsonify({"error": "Both images required"}), 400

    uploads_dir = os.path.join(os.getcwd(), "uploads")
    os.makedirs(uploads_dir, exist_ok=True)

    rgb_filename = str(uuid.uuid4()) + "_" + secure_filename(rgb.filename)
    thermal_filename = str(uuid.uuid4()) + "_" + secure_filename(thermal.filename)

    rgb_path = os.path.join(uploads_dir, rgb_filename)
    thermal_path = os.path.join(uploads_dir, thermal_filename)

    rgb.save(rgb_path)
    thermal.save(thermal_path)

    result = run_detection(rgb_path, thermal_path)

    return jsonify(result), 200


# 🔥 Health Check
@detection_bp.route("/api/health")
def health_check():
    return jsonify({
        "status": "healthy",
        "message": "Backend running successfully"
    }), 200