 MERN Task ManagerAdd commentMore actions

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
A simple Task Manager web application built with the MERN stack (MongoDB, Express, React, Node.js).  
Allows users to register, log in, and manage their tasks with full CRUD operations.

## Available Scripts
---

In the project directory, you can run:
## Features

### `npm start`
- User registration and login with JWT authentication
- Protected routes for managing tasks
- CRUD operations for tasks (Create, Read, Update, Delete)
- Frontend built with React and React Router v6+
- Backend RESTful API with Express and MongoDB Atlas
- JWT token stored in localStorage for authentication
- Deployment-ready for live demo

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
---

The page will reload if you make edits.\
You will also see any lint errors in the console.
## Live Demo

### `npm test`
- Frontend via vercel: [https://mern-stack-task-manager-nine.vercel.app/]
- Backend API via Render: [https://mern-stack-task-manager-ntj7.onrender.com]

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
---

### `npm run build`
## Tech Stack

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
- Frontend: React, React Router, Axios
- Backend: Node.js, Express, MongoDB, Mongoose
- Authentication: JWT (JSON Web Tokens)
- Deployment: Vercel (Frontend), Render/Heroku (Backend)
- Database: MongoDB Atlas

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
---

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
## Getting Started

### `npm run eject`
### Prerequisites

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
- Node.js installed
- MongoDB Atlas account (or local MongoDB instance)
- Git installed

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
### Clone the repo

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.
```bash
git clone https://github.com/yourusername/mern-task-manager.git

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
cd backend
npm install
Create a .env file in /backend
Start the backend server:
npm run dev

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
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
