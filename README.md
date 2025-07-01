# 🧩 Users App – Node.js Backend API

This is a simple Express.js backend for handling user authentication and product management using MongoDB.

---

## 📁 Project Structure

users-app/
├── tests/ # Unit tests
│ └── user.test.js
├── controllers/ # Route controllers
│ ├── auth.controller.js
│ ├── user.controller.js
│ └── user.product.controller.js
├── files/ # Static HTML files
│ ├── auth/
│ │ └── login.html
│ ├── user/
│ │ └── index.html
│ └── assets/ # (Optional static files)
├── logger/ # Custom logger setup
│ └── logger.js
├── middlewares/ # Middleware functions
│ └── auth.middleware.js
├── models/ # Mongoose models
│ ├── user.model.js
│ └── product.model.js
├── routes/ # Express routes
│ ├── auth.routes.js
│ ├── user.routes.js
│ └── user.products.routes.js
├── services/ # (Business logic placeholder)
├── app.js # App entry point
├── package.json
├── package-lock.json
└── README.md

yaml
Copy
Edit

---

## 🚀 Features

- 🔐 JWT-based user authentication
- 👥 User CRUD operations
- 📦 Product CRUD endpoints
- 🧪 Basic unit testing
- 🧱 MVC architecture
- 📝 Custom logger
- 🖼️ Static file support

---

## 📦 Installation
git clone https://github.com/YOUR_USERNAME/users-app.git
cd users-app
npm install


▶️ Running the Server
npm start
For development with auto-reload:
npm run dev


🧪 Running Tests
npm test


📡 API Endpoints

🔐 Auth Routes
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login and get JWT

👥 User Routes
Method	Endpoint	Description
GET	/api/users	Get all users
GET	/api/users/:id	Get user by ID
PUT	/api/users/:id	Update user
DELETE	/api/users/:id	Delete user

📦 Product Routes
Method	Endpoint	Description
GET	/api/products	Get all products
POST	/api/products	Add a new product
PUT	/api/products/:id	Update a product
DELETE	/api/products/:id	Delete a product


🛠️ Tech Stack

Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
HTML (Static rendering)
Mocha / Chai (or Jest)
Custom Middleware
