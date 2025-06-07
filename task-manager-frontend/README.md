# MERN Task Manager

A simple Task Manager web application built with the MERN stack (MongoDB, Express, React, Node.js).  
Allows users to register, log in, and manage their tasks with full CRUD operations.

---

## Features

- User registration and login with JWT authentication
- Protected routes for managing tasks
- CRUD operations for tasks (Create, Read, Update, Delete)
- Frontend built with React and React Router v6+
- Backend RESTful API with Express and MongoDB Atlas
- JWT token stored in localStorage for authentication
- Deployment-ready for live demo

---

## Live Demo

- Frontend via vercel: [https://mern-stack-task-manager-nine.vercel.app/]
- Backend API via Render: [https://mern-stack-task-manager-ntj7.onrender.com]

---

## Tech Stack

- Frontend: React, React Router, Axios
- Backend: Node.js, Express, MongoDB, Mongoose
- Authentication: JWT (JSON Web Tokens)
- Deployment: Vercel (Frontend), Render/Heroku (Backend)
- Database: MongoDB Atlas

---

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB Atlas account (or local MongoDB instance)
- Git installed

### Clone the repo

```bash
git clone https://github.com/yourusername/mern-task-manager.git

cd backend
npm install
Create a .env file in /backend
Start the backend server:
npm run dev



Frontend Setup
cd frontend
npm install
Create a .env file in /frontend with:
REACT_APP_API_URL=http://localhost:5000/api
Start the React app:
npm start
API Endpoints
Auth
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login and get JWT token

Tasks (Protected - require JWT token)
Method	Endpoint	Description
POST	/api/tasks/	Create a new task
GET	/api/tasks/	Get all tasks for user
GET	/api/tasks/:id	Get task by ID
PUT	/api/tasks/:id	Update task by ID
DELETE	/api/tasks/:id	Delete task by ID

Test Credentials
Email: test@example.com  
Password: test@123
Screenshots
Add relevant screenshots here if available

Bonus Features (Optional)
Form validation using Formik & Yup

Toast notifications for user feedback

Loading states and error handling

UI styled with Tailwind CSS (or your UI library)

Folder Structure

Auth
