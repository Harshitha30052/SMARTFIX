# SmartFix – AI Enabled Maintenance Management System

SmartFix is an AI-powered maintenance management system developed as a team project to automate complaint handling and improve maintenance workflows.

The system uses image-based machine learning to detect and classify maintenance issues and automatically support technician assignment. It also provides real-time updates and complaint tracking through full-stack integration.

---

## Project Overview

The main objective of this project was to reduce manual complaint management by identifying maintenance issues directly from uploaded images and streamlining the service process.

The system allows users to submit complaints, upload images, receive issue classification results, and monitor complaint progress through an integrated platform.

---

## Features

* AI-based issue detection using image classification
* Classification of maintenance issues:

  * Carpentry
  * Electrical
  * Plumbing
* Automatic technician assignment
* Complaint tracking and management
* Real-time updates using Socket.io
* Full-stack integration for seamless communication

---

## Technologies Used

### Frontend

* React.js
* Tailwind CSS

### Backend

* Node.js
* Express.js
* Socket.io

### AI Module

* Python
* TensorFlow
* Keras
* MobileNetV2 (Transfer Learning)
* Flask API

### Database

* MongoDB Atlas

---

## Team Contribution

This project was developed collaboratively as a team project.

The team contributed to:

* Frontend development and UI design
* Backend API development
* AI model training and integration
* Database connectivity and management
* Real-time communication implementation
* Testing and debugging across modules

---

## Setup Instructions

### 1. Clone Repository

git clone YOUR_REPOSITORY_URL

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

### 4. AI Module Setup

Install dependencies:

pip install tensorflow flask pillow numpy

Train model:

python train.py

Run prediction service:

python app.py

---

## Project Structure

* **frontend/** – React frontend and user interface
* **backend/** – APIs and server-side implementation
* **ai-model/** – Machine learning model and prediction service
* **uploads/** – Uploaded complaint images
* **dataset/** – Training dataset
* **model.keras** – Trained model
* **.env** – Environment variables

---

## Dataset Information

The dataset contains categorized maintenance issue images for training and testing.

Categories:

* Carpentry
* Electrical
* Plumbing

---

##  API Endpoint

### POST /predict

Input:

* Image upload

Output:

{
"category": "electrical",
"confidence": 0.92
}

---

##  Model Details

* Model: MobileNetV2
* Approach: Transfer Learning
* Input Size: 224 × 224
* Number of Classes: 3
* Loss Function: Categorical Crossentropy
* Optimizer: Adam

---

## Challenges Faced

During development, the team worked through challenges including:

* Integrating frontend with AI prediction services
* Handling image preprocessing and classification
* Managing communication between application modules
* Improving response handling and prediction workflow
* Coordinating integration across multiple technologies

---

## Debugging Process

The team improved reliability by:

* Testing API endpoints
* Monitoring backend logs
* Validating prediction results
* Debugging integration issues
* Performing end-to-end application testing

---

## Future Improvements

* Cloud deployment for AI services
* Authentication and authorization
* Improved prediction accuracy
* Notification system
* Additional maintenance categories

---

## Learning Outcomes

Through this project, the team gained practical experience in:

* Machine Learning Integration
* Transfer Learning
* Full Stack Development
* API Development
* Real-Time Communication
* System Integration

---

## Team Project

This project was developed collaboratively to apply machine learning and full-stack development concepts to a real-world maintenance management scenario.

## Author

Harshitha Reddy
