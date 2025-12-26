---

# 🔐 Authentication & Credential Handling App

A simple **full-stack authentication project** built to demonstrate **user registration and login** using modern web technologies.
This project focuses on **basic credential handling**, routing, and database interaction in a clean and easy-to-understand way ✨

---

## 🛠 Tech Stack

* **Frontend:** React ⚛️
* **Backend:** Node.js + Express 🚀
* **Database:** PostgreSQL 🐘
* **Security:** bcrypt for password hashing 🔒

---

## ✨ Features

* 🧾 User registration with username & password
* 🔑 Secure login with hashed password verification
* 🚫 Prevents duplicate usernames
* 🔐 Protected “Secrets” page after successful login
* 🧠 Simple and beginner-friendly code structure

---

## 🗄️ Database Structure

The application uses a single `users` table:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL
);
```

---

## 📁 Project Structure (simplified)

```
project-root/
├─ frontend/
│  ├─ package.json
│  ├─ public/
│  │  ├─ index.html
│  │  └─ styles.css
│  └─ src/
│     ├─ index.js
│     └─ components/
│        ├─ App.jsx
│        ├─ home.jsx
│        ├─ login.jsx
│        ├─ register.jsx
│        ├─ secrets.jsx
│        └─ LetterGlitch.jsx
└─ backend/
   ├─ server.js
   ├─ .env
   └─ package.json

```

---

## ⚙️ How to Run the Project

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Pranesh-stha/Practicing-Authentication.git
```

---

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
DB_USER=your_db_user
DB_HOST=localhost
DB_NAME=your_db_name
DB_PASSWORD=your_db_password
DB_PORT=5432
```

Start the server:

```bash
node server.js
```

Backend will run at:

```
http://localhost:5000
```

---

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend will run at:

```
http://localhost:3000
```

---

## 🚀 How It Works

1. Users can **register** with a username and password
2. Passwords are **hashed using bcrypt** before storing
3. Users can **log in** with valid credentials
4. Successful login grants access to the **Secrets page** 🔓
5. Logout returns the user to the home screen

---

## 📌 Purpose of This Project

This project is intended for:

* Learning **authentication fundamentals**
* Understanding **React ↔ Express communication**
* Practicing **PostgreSQL integration**
* Building confidence with **full-stack development**

---

