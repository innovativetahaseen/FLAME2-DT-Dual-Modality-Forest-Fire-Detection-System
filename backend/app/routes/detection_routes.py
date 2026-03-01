from flask import Blueprint, request, jsonify, send_from_directory
from app.services.ml_service import run_detection
import os
from werkzeug.utils import secure_filename
import uuid

detection_bp = Blueprint('detection', __name__)

# 🔥 Absolute path to frontend-ui
BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../"))
FRONTEND_DIR = os.path.join(BASE_DIR, "frontend-ui")

# ✅ Serve index.html at "/"
@detection_bp.route("/")
def serve_index():
    return send_from_directory(FRONTEND_DIR, "index.html")

# 🔥 Serve static files (css/js)
@detection_bp.route("/css/<path:filename>")
def serve_css(filename):
    return send_from_directory(os.path.join(FRONTEND_DIR, "css"), filename)

@detection_bp.route("/js/<path:filename>")
def serve_js(filename):
    return send_from_directory(os.path.join(FRONTEND_DIR, "js"), filename)

# 🔥 Fire Detection API
@detection_bp.route("/api/detect", methods=["POST"])
def detect_fire():
    rgb = request.files.get("rgb_image")
    thermal = request.files.get("thermal_image")

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

# 🔥 Health Check
@detection_bp.route("/api/health")
def health_check():
    return jsonify({
        "status": "healthy",
        "message": "Backend running successfully"
    }), 200