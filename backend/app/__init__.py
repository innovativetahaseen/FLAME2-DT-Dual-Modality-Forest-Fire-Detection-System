from flask import Flask
from flask_cors import CORS
from app.routes.detection_routes import detection_bp
import os

def create_app():
    # Absolute path to root project
    BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "../../"))

    app = Flask(
        __name__,
        template_folder=os.path.join(BASE_DIR, "frontend"),
        static_folder=os.path.join(BASE_DIR, "frontend")
    )

    CORS(app)

    app.register_blueprint(detection_bp)

    return app