# 🛠️ SmartFix – AI Enabled Maintenance Management System

SmartFix is a full-stack AI-powered maintenance management system that automates issue detection, classification, and technician assignment using image-based machine learning. It integrates real-time communication and scalable backend services for efficient complaint handling.

---

## 🚀 Features

- AI-based issue detection using CNN (TensorFlow + MobileNetV2)
- Image-based classification (Carpentry, Electrical, Plumbing)
- Automatic technician assignment based on issue category
- Real-time updates using Socket.io
- Complaint tracking and management system
- Full-stack integration (React + Node.js + MongoDB + AI model)

---

## 🧑‍💻 Tech Stack

**Frontend:**
- React.js
- Tailwind CSS (for styling)

**Backend:**
- Node.js
- Express.js
- Socket.io

**AI Model:**
- Python
- TensorFlow / Keras
- MobileNetV2 (Transfer Learning)
- Flask API

**Database:**
- MongoDB Atlas

---

## 📁 Project Structure

SmartFix/
├── frontend/        (React App)
├── backend/         (Node.js + Express + MongoDB)
├── ai-model/        (ML Model + Flask API)
│   ├── train.py
│   ├── app.py
│   └── model.keras
└── README.md

---

## ⚙️ Setup Instructions

### 1. Clone Repository
git clone https://github.com/your-username/SmartFix.git  
cd SmartFix  

---

### 2. Backend Setup
cd backend  
npm install  
node server.js  

---

### 3. Frontend Setup
cd frontend  
npm install  
npm start  

---

### 4. AI Model Setup

Install dependencies:
cd ai-model  
pip install tensorflow flask pillow numpy  

Train model:
python train.py  

Run Flask API:
python app.py  

---

## 📸 Dataset Structure

dataset/
├── carpentry/
├── electrical/
└── plumbing/

Each folder should contain images for training.

---

## 🔗 API Endpoint

**POST /predict**

Input:
- image (file upload)

Output:
{
  "category": "electrical",
  "confidence": 0.92
}

---

## 🧠 Model Details

- Model: MobileNetV2 (Transfer Learning)
- Input Size: 224 x 224
- Classes: 3
- Loss Function: Categorical Crossentropy
- Optimizer: Adam

---

## ⚠️ Important Notes

- Do NOT upload node_modules/, venv/, dataset/ to GitHub
- Keep model.keras inside ai-model folder
- Configure MongoDB Atlas connection in .env file
- Ensure uploads/ folder exists in backend
- Add proper .gitignore before pushing

---

## 📌 .gitignore

node_modules/
__pycache__/
*.pyc
.env
uploads/
dataset/
venv/
