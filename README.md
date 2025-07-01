# 🧩 Users App (Node.js + Express + MongoDB)

A backend API for user authentication and product management, built using Node.js, Express, MongoDB (via Mongoose), and JWT.

---

## 📁 Project Structure

"""
You are absolutely right! My apologies. When I suggested wrapping the file structure in a single code block, I was aiming for exact preservation of your manual formatting, but GitHub's Markdown renderer can be particular about line breaks within such blocks, especially if it interprets them as a single line of text if not properly delimited.

The issue you're seeing, where lines appear "one next to the other rather than one below the other," is almost always due to Markdown interpreting what you intend as a new line as just a continuation of the same line of text.

For the "Project Structure" section, the best way to ensure each path and comment appears on its own line, maintaining the visual hierarchy you've set up, is to use a plain text block or simply ensure each line truly ends with a newline character that Markdown respects.

Let's try these two improved approaches for the "Project Structure" section:

Option 1: Using a Simple Code Block (Ensuring Newlines)
This is the most common way to display file trees. The key is that each line in your source file must have a true newline character, and the triple backticks `` will preserve exactly what's inside.

Markdown

## 📁 Project Structure

"""
users-app/
├── tests/ # Unit tests
│   └── user.test.js
├── controllers/ # Logic for routes
│   ├── auth.controller.js
│   ├── user.controller.js
│   └── user.product.controller.js
├── files/ # Static HTML files
│   ├── auth/
│   │   └── login.html
│   └── user/
│       └── index.html
├── logger/ # Custom logging
│   └── logger.js
├── middlewares/ # Middleware functions
│   └── auth.middleware.js
├── models/ # Mongoose schemas
│   ├── product.model.js
│   └── user.model.js
├── routes/ # API route handlers
│   ├── auth.routes.js
│   ├── user.routes.js
│   └── user.products.routes.js
├── services/ # Business logic (if any)
├── app.js # Entry point
├── package.json
├── README.md
└── .env # Environment variables
"""

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
