# 🔥 FLAME2-DT
## Dual-Modality Forest Fire Detection System

---

## 📌 Project Overview

FLAME2-DT (Forest Learning and Monitoring Engine - Dual Technology) is a modular full-stack intelligent system designed to detect forest fires using a **dual-modality deep learning approach**.

The system integrates **RGB and Thermal image inputs** to improve early fire detection accuracy. The architecture separates **Frontend, Backend, Machine Learning, and Alert Services** for scalable development and easier maintenance.

The platform allows users to upload images and receive **AI-based fire detection predictions in real time**. When fire is detected, the system triggers an **Alert System** to notify users for early response and monitoring.

---

# 🏗️ System Architecture

```
User
 ↓
React Frontend (Vite)
 ↓
Flask Backend API
 ↓
Authentication Layer (JWT)
 ↓
ML Detection Service
 ↓
Fire Detection Model (RGB + Thermal)
 ↓
Prediction
 ↓
Alert System (Email / Notification)
 ↓
Response to User
```

---

# 📂 Project Structure

```
FLAME2-DT-Dual-Modality-Forest-Fire-Detection-System/

│
├── backend/
│   │
│   ├── app/
│   │   │
│   │   ├── models/
│   │   │   └── user.py
│   │   │
│   │   ├── routes/
│   │   │   ├── auth_routes.py
│   │   │   └── detection_routes.py
│   │   │
│   │   ├── services/
│   │   │   ├── alert_service.py
│   │   │   └── ml_service.py
│   │   │
│   │   ├── __init__.py
│   │   └── extensions.py
│   │
│   └── run.py
│
├── frontend-react/
│   │
│   ├── public/
│   │   └── vite.svg
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── App.css
│   │   └── index.css
│   │
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── vite.config.js
│
├── ml/
│   ├── fire_model.pth
│   ├── model.py
│   └── train.py
│
├── requirements.txt
├── .gitignore
└── README.md
```

---

# ⚙️ Technologies Used

## Backend
- Python
- Flask
- REST API
- Flask-JWT-Extended
- SQLAlchemy

## Frontend
- React
- Vite
- JavaScript
- HTML
- CSS
- Axios / Fetch API

## Machine Learning
- PyTorch
- Image Classification
- Dual-Modality Detection

## Alert System
- Automated Fire Detection Alerts
- Email Notification System
- Environment Variable based configuration

## Version Control
- Git
- GitHub
- Branch-based Development Workflow

---

# 🚀 How to Run Locally

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/FLAME2-DT-Dual-Modality-Forest-Fire-Detection-System.git

cd FLAME2-DT-Dual-Modality-Forest-Fire-Detection-System
```

---

# 2️⃣ Setup Backend

```
cd backend
python -m venv venv
```

Mac / Linux

```
source venv/bin/activate
```

Windows

```
venv\Scripts\activate
```

Install dependencies

```
pip install -r ../requirements.txt
```

---

# 3️⃣ Run Backend Server

```
python run.py
```

Backend will run at

```
http://127.0.0.1:5000
```

---

# 4️⃣ Run Frontend

Open a new terminal

```
cd frontend-react
npm install
npm run dev
```

Frontend will run at

```
http://localhost:5173
```

---

# 📊 Key Features

🔥 Dual-Modality Fire Detection (RGB + Thermal)  
⚡ Real-time AI Prediction System  
🚨 Automated Fire Alert System  
🔐 Secure JWT Authentication  
🧠 PyTorch Deep Learning Model  
🧩 Modular Flask Backend Architecture  
🌐 Modern React + Vite Frontend  
🔗 REST API Integration  

---

# 🔧 Development Workflow

The project follows a **branch-based Git workflow**.

```
main
│
├── backend-dev
├── ML-Model
├── feature/authentication
├── feature/alert-system
└── react-integration
```

Each feature is developed in its own branch and merged into `main` using Pull Requests.

---

# 👥 Team Members

Tahaseen Khan  
Shaurya Singhal  
Bharti Chaudhary  

---

# 📄 License

This project is developed for **academic research and educational purposes**.