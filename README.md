# 🔥 FLAME2-DT  
## Dual-Modality Forest Fire Detection System  

---

## 📌 Project Overview  

FLAME2-DT is a modular full-stack web application designed to detect forest fires using a deep learning model with a dual-modality approach (RGB + Thermal images).

The system follows a clean modular architecture separating Frontend, Backend, and Machine Learning components.

---

## 🏗️ System Architecture  

User → Frontend UI → Flask Backend → ML Model → Prediction → Response  

---

## 📂 Project Structure  

```
FLAME2-DT-Dual-Modality-Forest-Fire-Detection-System/

│
├── backend/
│   ├── app/
│   │   ├── routes/
│   │   │   └── detection_routes.py
│   │   ├── services/
│   │   │   └── ml_service.py
│   │   ├── __init__.py
│   │
│   └── run.py
│
├── frontend/
│   ├── css/
│   ├── js/
│   └── index.html
│
├── ml/
│   ├── fire_model.pth
│   ├── model.py
│   └── train.py
│
├── requirements.txt
└── README.md
```

---

## ⚙️ Technologies Used  

### Backend
- Python  
- Flask  
- REST API  
- Modular Architecture  

### Frontend
- HTML  
- CSS  
- JavaScript  
- Fetch API  

### Machine Learning
- PyTorch  
- Image Classification  
- Dual-Modality Detection  

---

## 🚀 How to Run Locally  

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/FLAME2-DT-Dual-Modality-Forest-Fire-Detection-System.git
cd FLAME2-DT-Dual-Modality-Forest-Fire-Detection-System
```

### 2️⃣ Setup Backend Environment

```bash
cd backend
python -m venv venv
source venv/bin/activate      # Mac/Linux
# venv\Scripts\activate       # Windows

pip install -r ../requirements.txt
```

### 3️⃣ Run Backend Server

```bash
python run.py
```

Backend will start at:

```
http://127.0.0.1:5000
```

### 4️⃣ Open Frontend

Open `frontend/index.html` in your browser and upload an image to test fire detection.

---

## 📊 Features  

- Dual-Modality Fire Detection  
- Clean Backend Structure (App Factory Pattern)  
- Modular Service Layer  
- Integrated ML Model  
- Organized Project Structure  

---

## 👥 Team Members  

- Tahaseen Khan  
- Shaurya Singhal  
- Bahri  

---

## 📄 License  

This project is developed for academic and research purposes.
