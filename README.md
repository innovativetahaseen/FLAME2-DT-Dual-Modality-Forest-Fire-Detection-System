# 🔥 FLAME2-DT  
## Dual-Modality Forest Fire Detection System

---

## 📌 Project Overview

FLAME2-DT is a modular Flask-based web application that detects forest fires using a deep learning model and a dual-modality detection approach (RGB + Thermal).

The system integrates:

- Image-based fire detection (PyTorch model)
- Clean backend service layer (Flask)
- Interactive frontend interface
- Modular ML architecture

---

## 🏗 System Architecture

### 📂 Project Structure

```bash
backend/
│
├── app/
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
├── run.py
│
ml/
│   ├── model.py
│   ├── train.py
│   └── fire_model.pth
│
dataset/
│
README.md
requirements.txt
```

---

## 🔄 Application Flow

```
User → Frontend → Flask Route → ML Service → PyTorch Model → Response → UI Update
```

---

## 🧠 Machine Learning Component

### Model Architecture
- Backbone: ResNet18
- Framework: PyTorch
- Input Size: 224x224
- Classes:
  - Fire
  - No Fire

### Features
- Custom-trained CNN model
- Trained using Forest Fire dataset
- Model weights stored in `fire_model.pth`
- Prediction handled via service layer (`ml_service.py`)
- Training handled via `ml/train.py`

---

## 🌐 Tech Stack

| Layer | Technology |
|-------|------------|
| Backend | Python |
| Framework | Flask |
| ML | PyTorch (ResNet18) |
| Frontend | HTML, CSS, JavaScript |
| Version Control | Git & GitHub |
| Deployment | Render (Planned) |

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

## 🔐 Security & Architecture

- Modular separation (backend / ml / frontend)
- Service-layer abstraction
- No hardcoded secrets
- Structured branch architecture
---

## 👥 Team

- Tahaseen Khan  
- Shaurya Singhal  
- Bharti Chaudhary  

---