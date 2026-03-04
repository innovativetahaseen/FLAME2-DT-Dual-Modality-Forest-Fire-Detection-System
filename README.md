# 🔥 FLAME2-DT  
## Dual-Modality Forest Fire Detection System  

---

## 📌 Project Overview  

**FLAME2-DT (Forest Learning and Monitoring Engine - Dual Technology)** is a modular **full-stack intelligent system** designed to detect forest fires using a **dual-modality deep learning approach**.

The system integrates **RGB and Thermal image inputs** to improve early fire detection accuracy.  
It follows a clean **modular architecture separating Frontend, Backend, and Machine Learning components**, enabling scalable development and easier maintenance.

The platform allows users to upload images and receive **AI-based fire detection predictions in real time**.

---

## 🏗️ System Architecture  

```
User → React Frontend → Flask Backend API → ML Model → Prediction → Response
```

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
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── React Components
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
- React  
- JavaScript  
- HTML  
- CSS  
- Fetch API / Axios  

### Machine Learning
- PyTorch  
- Image Classification  
- Dual-Modality Detection  

### Version Control
- Git  
- GitHub  
- Branch-based development workflow  

---

## 🚀 How to Run Locally  

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/FLAME2-DT-Dual-Modality-Forest-Fire-Detection-System.git
cd FLAME2-DT-Dual-Modality-Forest-Fire-Detection-System
```

---

### 2️⃣ Setup Backend Environment

```bash
cd backend
python -m venv venv

# Mac / Linux
source venv/bin/activate

# Windows
# venv\Scripts\activate

pip install -r ../requirements.txt
```

---

### 3️⃣ Run Backend Server

```bash
python run.py
```

Backend will start at:

```
http://127.0.0.1:5000
```

---

### 4️⃣ Run Frontend

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

Frontend will start at:

```
http://localhost:3000
```

---

## 📊 Key Features  

- 🔥 Dual-Modality Fire Detection (RGB + Thermal)  
- ⚡ AI-based Prediction System  
- 🧠 PyTorch Deep Learning Model  
- 🧩 Modular Backend Architecture  
- 🌐 React-based Modern Frontend  
- 🔗 REST API Integration  
- 🧪 Scalable ML Service Layer  

---

## 🔧 Development Workflow  

The project follows a **branch-based Git workflow**.

```
main
│
├── backend-dev
├── ML-Model
├── feature/authentication
└── react-integration
```

The React frontend was integrated using the **react-integration branch** and later merged into the **main branch through a Pull Request**.

---

## 👥 Team Members  

- Tahaseen Khan  
- Shaurya Singhal  
- Bharti Chaudhary  

---

## 📄 License  

This project is developed for **academic research and educational purposes**.

