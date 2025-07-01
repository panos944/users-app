# 🧩 Users App (Node.js + Express + MongoDB)

A backend API for user authentication and product management, built using Node.js, Express, MongoDB (via Mongoose), and JWT.

---

## 📁 Project Structure

- users-app/
    - tests/ # Unit tests
        - user.test.js
    - controllers/ # Logic for routes
        - auth.controller.js
        - user.controller.js
        - user.product.controller.js
    - files/ # Static HTML files
        - auth/
            - login.html
        - user/
            - index.html
    - logger/ # Custom logging
        - logger.js
    - middlewares/ # Middleware functions
        - auth.middleware.js
    - models/ # Mongoose schemas
        - product.model.js
        - user.model.js
    - routes/ # API route handlers
        - auth.routes.js
        - user.routes.js
        - user.products.routes.js
    - services/ # Business logic (if any)
    - app.js # Entry point
    - package.json
    - README.md
    - .env # Environment variables

---

## 🚀 Features

- 🔐 User authentication (JWT)
- 🧑‍💻 User CRUD APIs
- 📦 Product CRUD APIs
- 📂 Static file rendering (HTML)
- 🧪 Basic unit tests with Jest/Mocha
- 🧱 Modular MVC architecture
- 📊 Custom logger for request tracking

---

## 🛠️ Technologies

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **JWT** (Authentication)
- **HTML** (Static rendering)
- **Jest / Mocha** (Testing)
- **Dotenv** for config

---

## ⚙️ Setup & Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/YOUR_USERNAME/users-app.git
    cd users-app
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Create .env file**

    Create a file named `.env` in the root directory with the following content:

    ```
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/users-app
    JWT_SECRET=your_jwt_secret_key
    ```

4.  **Start the app**

    ```bash
    # For production
    npm start

    # For development (with nodemon)
    npm run dev
    ```

---

## 📡 API Overview

### 🔐 Auth Routes

| Method | Endpoint          | Description        |
| :----- | :---------------- | :----------------- |
| `POST` | `/api/auth/register` | Register new user  |
| `POST` | `/api/auth/login`    | Authenticate user  |

### 👤 User Routes

| Method | Endpoint        | Description      |
| :----- | :-------------- | :--------------- |
| `GET`  | `/api/users`      | Get all users    |
| `GET`  | `/api/users/:id`  | Get user by ID   |
| `PUT`  | `/api/users/:id`  | Update user      |
| `DELETE` | `/api/users/:id` | Delete user      |

### 📦 Product Routes

| Method | Endpoint          | Description        |
| :----- | :---------------- | :----------------- |
| `GET`  | `/api/products`     | Get all products   |
| `POST` | `/api/products`     | Create new product |
| `PUT`  | `/api/products/:id` | Update product     |
| `DELETE` | `/api/products/:id`| Delete product     |
