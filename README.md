# Users App - Node.js Backend

This is a simple backend application built with **Node.js** and **Express.js**. It includes user authentication, product management, and basic routing structure. Ideal for REST API practice and backend learning.

---

## 🗂️ Project Structure

users-app/
│
├── tests/ # Unit tests
│ └── user.test.js
│
├── controllers/ # Route logic controllers
│ ├── auth.controller.js
│ ├── user.controller.js
│ └── user.product.controller.js
│
├── files/ # Static files
│ ├── auth/
│ │ └── login.html
│ ├── user/
│ │ └── index.html
│ └── assets/ # (Unused folder — optional)
│
├── logger/ # Custom logger setup
│ └── logger.js
│
├── middlewares/ # Middleware functions
│ └── auth.middleware.js
│
├── models/ # Mongoose models (MongoDB)
│ ├── user.model.js
│ └── product.model.js
│
├── routes/ # Express route handlers
│ ├── auth.routes.js
│ ├── user.routes.js
│ └── user.products.routes.js
│
├── services/ # (Empty or for business logic)
│
├── app.js # Main entry point
├── package.json
├── package-lock.json
└── README.md


---

## 🚀 Features

- 🔐 User Authentication (JWT-based)
- 📦 Product routes (CRUD)
- 👥 User management
- 🧪 Basic unit test example
- 🧱 MVC structure
- 📄 Static file serving
- ✅ Middleware for authentication
- 📝 Custom logging with `logger.js`

---

## 🛠️ Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/YOUR_USERNAME/users-app.git
   cd users-app

   
2. Install dependencies
npm install


3. Start the server
npm start


📡 API Endpoints

Auth
POST /api/auth/register - Register a new user
POST /api/auth/login - Login and receive token

Users
GET /api/users - Get all users (protected)
GET /api/users/:id - Get user by ID
PUT /api/users/:id - Update user
DELETE /api/users/:id - Delete user

Products
GET /api/products - Get all products
POST /api/products - Create a new product
PUT /api/products/:id - Update product
DELETE /api/products/:id - Delete product


✅ Testing

Basic unit tests exist under __tests__/.

Run tests with:
npm test


🧱 Tech Stack

Node.js
Express.js
MongoDB / Mongoose
JWT for Auth
HTML (static files)
Mocha/Chai (or Jest – depending on test setup)
Custom Middleware
Logger Utility


📌 Notes

The services/ folder is a placeholder for business logic (can be expanded).
Logger utility can be expanded with Winston/Morgan.
All API endpoints can be tested using Postman or curl.
Consider adding CORS and validation middleware for production.
