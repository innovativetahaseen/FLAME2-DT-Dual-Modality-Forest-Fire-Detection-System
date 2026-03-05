# 🔥 FLAME2-DT: Dual-Modality Forest Fire Detection System

FLAME2-DT is a Machine Learning based system designed to detect **forest fires from images** using deep learning techniques.
The system uses a **CNN-based model (ResNet)** for fire detection and provides **confidence scores for predictions**.

The project is structured as a **modular ML pipeline** including preprocessing, training, evaluation, and inference components.

---

# 🚀 Features

* 🔥 Forest fire detection using deep learning
* 🧠 CNN-based architecture (ResNet)
* 🧹 Image preprocessing pipeline
* 📊 Evaluation metrics (Accuracy, Precision, Recall, F1 Score)
* 📈 Confusion matrix visualization
* 🤖 Model inference with confidence score
* 🧩 Modular ML architecture
* 🌐 Ready for backend API integration

---

# 🧠 Model Architecture

The model uses **ResNet18** for binary classification.

Input Image (224x224)
↓
Image Preprocessing
↓
ResNet CNN Model
↓
Fully Connected Layer
↓
Binary Classification

Classes:

* Fire
* No Fire

---

# 📂 Project Structure

```
flame2-ml
│
├── dataset/
│
├── models/
│   └── model.py
│
├── preprocessing/
│   ├── transforms.py
│   └── dataset_loader.py
│
├── training/
│   ├── train.py
│   └── evaluate.py
│
├── inference/
│   └── predict.py
│
├── utils/
│   └── metrics.py
│
├── saved_models/
│   └── fire_model.pth
│
├── requirements.txt
└── README.md
```

---

# 📦 Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/FLAME2-DT.git
cd FLAME2-DT
```

Create virtual environment:

```bash
python -m venv venv
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

---

# 📊 Dataset

The project uses a **Forest Fire Image Dataset** structured as:

```
dataset/
   Forest Fire Dataset/
        Training/
            fire/
            nofire/
        Testing/
            fire/
            nofire/
```

Each folder contains images belonging to its respective class.

---

# 🏋️ Training the Model

Run the training pipeline:

```bash
python -m training.train
```

This will:

* Load the dataset
* Train the CNN model
* Save the trained weights

Saved model:

```
saved_models/fire_model.pth
```

---

# 📈 Model Evaluation

Run evaluation:

```bash
python -m training.evaluate
```

Metrics computed:

* Accuracy
* Precision
* Recall
* F1 Score
* Confusion Matrix

Example Output:

```
Accuracy : 0.91
Precision: 0.89
Recall   : 0.92
F1 Score : 0.90
```

---

# 🔍 Inference (Prediction)

Run prediction:

```bash
python -m inference.predict
```

Example output:

```
{
 "prediction": "fire",
 "confidence": 0.79
}
```

---

# 🌐 Backend Integration

The inference module can be connected to a **Flask API** for real-time predictions.

Example API response:

```json
{
 "prediction": "fire",
 "confidence": 0.79
}
```

This allows the system to integrate with:

* Web dashboards
* Monitoring systems
* IoT fire detection platforms

---

# 🛠 Technologies Used

* Python
* PyTorch
* Torchvision
* Scikit-Learn
* Matplotlib
* Seaborn
* PIL (Python Imaging Library)

---

# 📌 Future Improvements

* Dual-modality detection (RGB + Thermal images)
* Vision Transformer (ViT) integration
* Real-time camera detection
* Deployment using Flask/FastAPI
* Web dashboard for monitoring

---

# 👨‍💻 Author

Shaurya Singhal
B.Tech Student – AI & ML
GLA University, Mathura

---

# ⭐ Acknowledgements

* PyTorch
* Torchvision
* Forest Fire Image Dataset
* Open-source ML community
