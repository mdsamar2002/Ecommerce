# MERN E-Commerce Platform

## 🚀 Overview
This is a **full-featured e-commerce application** built using the **MERN (MongoDB, Express.js, React.js, Node.js) stack**. The platform allows users to browse products, add items to the cart, make secure payments, and manage their orders. An **admin dashboard** provides features for managing products, orders, and user roles.

## ✨ Features
- **User Authentication & Authorization** (JWT-based login & role management)
- **Admin Dashboard** (Product & Order Management, Sales Overview)
- **Secure Payments** (Integrated **PayPal** for transactions)
- **Product Search & Filtering**
- **Wishlist & Cart Management**
- **Order History & Status Tracking**
- **Image Uploads** using **Cloudinary**
- **Responsive UI** built with **React.js & Tailwind CSS**

---

## 🛠️ Tech Stack
### **Frontend:**
- React.js
- Redux Toolkit (State Management)
- React Router
- Tailwind CSS

### **Backend:**
- Node.js
- Express.js
- MongoDB & Mongoose (Database & ORM)
- JSON Web Tokens (JWT) for Authentication

### **Third-Party Integrations:**
- **PayPal API** for secure payments
- **Cloudinary** for image uploads
- **Multer** for file handling

---

## 🚀 Installation & Setup
### **Prerequisites:**
- Install **[Node.js](https://nodejs.org/)**
- Install **MongoDB** (or use a cloud-based database like MongoDB Atlas)
- Get a **PayPal API Key**

### **Clone Repository:**
```sh
git clone https://github.com/yourusername/ecommerce-mern.git
cd ecommerce-mern
```

### **Install Dependencies:**
#### **Backend Setup**
```sh
cd backend
npm install
```

#### **Frontend Setup**
```sh
cd frontend
npm install
```

### **Environment Variables Setup**
Create a `.env` file in the **backend** folder and add the following:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PAYPAL_CLIENT_ID=your_paypal_client_id
```

---

## 🔥 Running the Application
### **Start the Backend Server:**
```sh
cd backend
npm start
```

### **Start the Frontend Server:**
```sh
cd frontend
npm start
```

The application will be available at: **http://localhost:3000**

---

## 🚀 API Endpoints
### **User Routes:**
| Method | Endpoint          | Description             |
|--------|------------------|-------------------------|
| POST   | /api/users/login | User login              |
| POST   | /api/users       | Register a new user     |
| GET    | /api/users/me    | Get user profile        |

### **Product Routes:**
| Method | Endpoint          | Description                   |
|--------|------------------|-------------------------------|
| GET    | /api/products     | Get all products             |
| GET    | /api/products/:id | Get product by ID            |
| POST   | /api/products     | Add a new product (Admin)    |
| PUT    | /api/products/:id | Update product (Admin)       |
| DELETE | /api/products/:id | Delete product (Admin)       |

---

## 🛠️ Deployment
You can deploy the application using:
- **Frontend:** Vercel / Netlify
- **Backend:** Heroku / Render / AWS
- **Database:** MongoDB Atlas

### **Deploying the Frontend:**
```sh
npm run build
```
Then, deploy the `build/` folder to Vercel or Netlify.

### **Deploying the Backend:**
Ensure your `.env` file is configured correctly.

---

## 🛡 Security Measures
- **JWT-based authentication** for secure access
- **Hashed passwords** using bcrypt
- **Role-based access control** for admin & users
- **Sanitization & validation** for user input

---

## 👨‍💻 Contributing
Pull requests are welcome! If you have suggestions for improvements, feel free to open an issue.

---

## 📞 Contact
For any queries or collaboration, reach out at: **mdsamaratib@gmail.com**

