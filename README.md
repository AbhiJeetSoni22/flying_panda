# Visa Slot Alert Tracker

A mini internal tool built for The Flying Panda to track and manage visa slot alerts.
This application helps internal teams quickly create, view, update, and delete visa appointment alerts in a clean and structured way.

The focus of this project is clarity, clean architecture, and realistic production-style implementation rather than excessive features.

---

## 🧩 Problem Statement

Tracking visa appointment availability manually can be inefficient and error-prone.
This internal tool allows teams to:
- Create visa slot alerts
- Track their status (Active / Booked / Expired)
- Quickly update or remove alerts when needed

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- dotenv

### Frontend
- React (Vite)
- Tailwind CSS
- Fetch API

---

## 📂 Project Structure

```bash
visa-slot-alert-tracker/
 ├─ backend/
 │   ├─ config/
 │   ├─ controllers/
 │   ├─ middleware/
 │   ├─ models/
 │   ├─ routes/
 │   ├─ server.js
 │   └─ package.json
 │
 ├─ frontend/
 │   ├─ src/
 │   │   ├─ components/
 │   │   ├─ services/
 │   │   └─ App.jsx
 │   └─ package.json
 │
 └─ README.md
```

## 🚀 Setup Instructions

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file based on the `.env_sample` file and configure your environment variables.
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to `http://localhost:5173` to view the application.
