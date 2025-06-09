# MERN Stack Task Manager

A full-stack Task Management web application built using the **MERN** stack — **MongoDB**, **Express.js**, **React.js**, and **Node.js**. This app allows users to register, log in, and manage tasks with CRUD operations in a secure environment using JWT authentication and protected routes.

---
##  Live URLs

-  **Frontend** (Vercel) : (https://mern-stack-task-manager-nine.vercel.app)
-  **Backend API** (Render) : (https://mern-stack-task-manager-ntj7.onrender.com)

---

## Features

- **User Authentication**
  - User registration and login with JWT-based authentication
  - Password hashing and validation
  - Protected routes (dashboard, add/edit task) for authenticated users only

- **Task Management**
  - Create new tasks
  - View a dashboard with all tasks of the logged-in user
  - Edit existing tasks
  - Delete tasks 

- **Frontend** (React + Tailwind CSS)
  - Built with React.js and React Router for client-side routing
  - Private routes to restrict access to authenticated users
  - Context API to manage authentication state globally
  - Tailwind CSS for styling
  - Axios for HTTP requests with authorization headers automatically attached
  - Toast notifications via `react-hot-toast`
  - Loading states with disabled buttons & spinner indicators

- **Backend** (Node.js + Express)
  - RESTful API built with Express.js
  - MongoDB for data storage with Mongoose ODM
  - Routes for authentication (`/api/auth`) and tasks (`/api/tasks`)
  - Environment variables for configuration (MongoDB URI, server port, JWT secret)
  - CORS enabled for local development and deployment URLs
  - Middleware for JWT token verification

---

## Getting Started
### Prerequisites
- Node.js and npm installed
- MongoDB instance (local or cloud like MongoDB Atlas)
- Git installed

### Installation
**Clone the repository**
```bash
git clone https://github.com/Sandhya251/MERN-Stack-Task-Manager.git
cd MERN-Stack-Task-Manager

Setup Backend
cd backend
npm install

Setup Frontend
cd ../task-manager-frontend
npm install


Configuration
Create a .env file inside the backend folder with the following variables:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

Create a .env file inside the task-manager-frontend folder with:
REACT_APP_API_URL=http://localhost:5000


Running the Application
Open two terminal windows/tabs:
In one terminal, start the backend server:
cd backend
npm run dev

In the other terminal, start the frontend React app:
cd task-manager-frontend
npm start
The React app will run on http://localhost:3000 and the backend API server will run on http://localhost:5000.


Project Structure
backend/
├── controllers/
│   ├── authController.js
│   └── taskController.js
├── models/
│   ├── User.js
│   └── Task.js
├── routes/
│   ├── authRoutes.js
│   └── taskRoutes.js
├── server.js
└── .env

task-manager-frontend/
├── src/
│   ├── auth/
│   │   ├── AuthContext.tsx
│   │   └── PrivateRoute.tsx
│   ├── pages/
│   │   ├── AddTask.tsx
│   │   ├── Dashboard.tsx
│   │   ├── EditTask.tsx
│   │   ├── Login.tsx
│   │   └── Register.tsx
│   ├── api.js
│   ├── App.tsx
│   └── index.tsx
├── tailwind.config.js
├── postcss.config.js
└── .env


API Endpoints
Auth
Method	Endpoint	                       Description
POST	/api/auth/register               	Register a new user
POST	/api/auth/login                  	Login an existing user

Tasks
Method	Endpoint	                       Description
GET	/api/tasks	                        Get all tasks for user
POST	/api/tasks                       	Create a new task
GET	/api/tasks/:id                    	Get task by ID
PUT	/api/tasks/:id	                    Update task by ID

Technologies Used
Frontend: React, React Router, Axios, Tailwind CSS, TypeScript
Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, dotenv
Others: CORS, bcryptjs for password hashing

Extra Features Added
Error Handling: API routes and frontend use try-catch with meaningful error messages.
Toast Notifications: Instant feedback via react-hot-toast.
Loading States: Show spinner or disable button during async actions.

Test Credentials for live deployment
Email: testuser1@example.com
Password: 1234567




