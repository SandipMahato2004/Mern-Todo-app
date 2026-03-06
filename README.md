# MERN Todo App

A simple Todo application built using the **MERN Stack (MongoDB, Express, React, Node.js)**.
This project allows users to create and manage their daily tasks with authentication.

## Features

* User Authentication (JWT based login)
* Add new todos
* View all todos
* Delete todos
* MongoDB database integration
* REST API backend using Express

## Tech Stack

* **Frontend:** React.js
* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Authentication:** JSON Web Token (JWT)

## Project Structure

```
mern-todo-app
 ├── backend
 │     ├── server.js
 │     ├── routes
 │     ├── models
 │     └── middleware
 │
 └── frontend
       ├── src
       ├── public
       └── package.json
```

## Installation

### 1. Clone the repository

```
git clone https://github.com/yourusername/mern-todo-app.git
```

### 2. Install backend dependencies

```
cd backend
npm install
```

### 3. Install frontend dependencies

```
cd frontend
npm install
```

### 4. Run backend server

```
node server.js
```

### 5. Run React frontend

```
npm start
```

## Environment Variables

Create a `.env` file in the backend folder and add:

```
MONGO_URI=mongodb://127.0.0.1:27017/todoapp
JWT_SECRET=mysecretkey
PORT=5000
```

## Future Improvements

* Update todo feature
* Better UI design
* User registration page
* Deploy the application

## Author

Sandip Mahato
