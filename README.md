# 🔥 FLAME2-DT  
## Dual-Modality Forest Fire Detection System

---

## 📌 Project Overview

FLAME2-DT is a modular Flask-based web application that detects forest fires using a machine learning model and a dual-modality detection approach.

The system integrates:

- Image-based fire detection (ML model)  
- Backend service layer for prediction handling  
- Interactive web interface  

---

## 🏗 System Architecture

### 📂 Project Structure

```bash
backend/
│
├── app/
│   ├── __init__.py
│   ├── routes/
│   │   └── detection_routes.py
│   ├── services/
│   │   └── ml_service.py
│
├── frontend-ui/
│   ├── css/
│   ├── js/
│   └── index.html
│
├── ml_model/
│   └── model.py
│
├── run.py
```

---

### 🔄 Application Flow

```
User → Frontend UI → Flask Routes → ML Service → Model Prediction → Response
```

---

## 🧠 Machine Learning Component

- Custom-trained fire detection model  
- Binary classification:
  - Fire  
  - No Fire  
- Training handled via `train.py`  
- Prediction handled via `ml_service.py`  

---

## 🌐 Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Python |
| Framework | Flask |
| ML | Custom Classification Model |
| Frontend | HTML, CSS, JavaScript |
| Version Control | Git & GitHub |
| Deployment | Render (Planned) |

---

## 🔐 Security Status

- No secrets detected  
- Clean modular structure  
- Service-layer separation implemented  
- Ready for authentication integration  

Future Improvements:

- JWT Authentication  
- File validation  
- Role-based access control  

---

## 🚀 Installation

```bash
git clone https://github.com/innovativetahaseen/FLAME2-DT-Dual-Modality-Forest-Fire-Detection-System.git
cd FLAME2-DT-Dual-Modality-Forest-Fire-Detection-System

python -m venv venv
source venv/bin/activate   # Mac/Linux
pip install -r requirements.txt

python backend/run.py
```

---

## 📈 Future Scope

- Automated retraining pipeline  
- CI/CD integration  
- Cloud deployment monitoring  
- IoT sensor integration  
- Real-time alert system  

---

## 👥 Team

- Tahaseen Khan  
- Shaurya Singhal  
- Bharti Chaudhary  