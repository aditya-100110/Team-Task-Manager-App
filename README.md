# Team Task Manager

A modern full-stack team collaboration and task management platform that helps organizations manage projects, assign tasks, track progress, and improve productivity with role-based access control.

# Features

## Authentication & Authorization

* Secure Signup/Login system
* JWT-based authentication
* Role-based access control
* Admin and Member dashboards
* Protected routes

## Team & Project Management

* Create and manage projects
* Team collaboration system
* Assign tasks to members
* Role-specific permissions

## Task Management

* Create tasks
* Assign tasks to users
* Update task status
* Track task progress
* Priority-based task management
* Recent task activity tracking

## Dashboard & Analytics

* Interactive analytics dashboard
* Task distribution charts
* Priority analytics
* Task status overview
* Responsive statistics cards

## UI/UX Features

* Modern responsive dashboard
* Premium dark theme interface
* Mobile responsive layout
* Fixed sidebar navigation
* Interactive charts and graphs
* Smooth animations and transitions

---

# Tech Stack

## Frontend

* React.js
* Vite
* Tailwind CSS
* Redux Toolkit
* React Router DOM
* Recharts
* Axios
* React Icons

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* bcrypt.js
* dotenv

## Deployment

* Renedr
* MongoDB Atlas

---

---

# Installation & Setup

## Clone Repository

```bash
git clone https://github.com/your-username/team-task-manager.git
```

---

# Backend Setup

```bash
cd backend
npm install
npm run dev
```

Create a `.env` file inside backend folder:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
ADMIN_INVITE_CODE=123456                    <----use this code to enter as Admin.
FRONT_END_URL=http://localhost:5173
```

---

# Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

# API Features

## Authentication APIs

* User Signup
* User Login
* User Logout

## Task APIs

* Create Task
* Update Task
* Delete Task
* Get All Tasks
* Assign Tasks

## Dashboard APIs

* Analytics Data
* Task Statistics
* Recent Tasks

---

# Role-Based Access

## Admin

* Create tasks
* Assign tasks
* Manage users
* Access analytics dashboard
* View all tasks

## Member

* View assigned tasks
* Update task status
* Track task progress


# Responsive Design

The application is fully responsive and optimized for:

* Desktop
* Tablets
* Mobile Devices

---

# Future Improvements

* Real-time notifications
* Team chat system
* File attachments
* AI-powered task suggestions
* Calendar integration
* Email notifications
* Drag and drop task boards

---

# Challenges Faced

* Implementing role-based authentication
* Creating responsive dashboard layouts
* Managing protected routes
* Handling task analytics visualization
* Optimizing UI for mobile devices

---

# Learning Outcomes

Through this project, I gained practical experience in:

* Full-stack application development
* REST API development
* MongoDB database management
* JWT authentication
* State management with Redux
* Responsive UI development
* Deployment and hosting

---

# Author

Developed by Aditya Saini.

---


