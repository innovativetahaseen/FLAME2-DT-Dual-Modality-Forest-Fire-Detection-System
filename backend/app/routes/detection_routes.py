from flask import Blueprint, request, jsonify, render_template
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.services.ml_service import run_detection
from app.services.alert_service import send_fire_alert
from app.models.user import User

import os
from werkzeug.utils import secure_filename
import uuid

detection_bp = Blueprint('detection', __name__)




# 🔥 Fire Detection API (PROTECTED)
@detection_bp.route("/api/detect", methods=["POST"])
@jwt_required()
def detect_fire():

    # 🔑 Get logged-in user
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

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

    # 🔥 Run ML detection
    result = run_detection(rgb_path, thermal_path)

    print("DETECTION RESULT:", result)

    # 🔥 ALERT SYSTEM
    try:
        confidence = result.get("confidence", 0)
        confidence_percent = confidence * 100

        if confidence > 0.5 and user:
            print("🔥 ALERT TRIGGERED - sending email")

            send_fire_alert(user.email, confidence_percent)

            print("📧 Alert sent to:", user.email)

    except Exception as e:
        print("❌ Alert error:", e)

    return jsonify(result), 200


# 🔥 Health Check
@detection_bp.route("/api/health")
def health_check():
    return jsonify({
        "status": "healthy",
        "message": "Backend running successfully"
    }), 200