# Travel Backend

This project is a backend for a travel application built using Node.js, Express.js, and MongoDB. It includes user authentication, tour management, reviews, and bookings.

## Project Setup

### Prerequisites

- **Node.js**
- **MongoDB**

### Installation

1. **Clone the repository:**

    `git clone https://github.com/your-repo/travel-backend.git
    cd travel-backend`

2. **Install dependencies:**
```sh
    npm install
```
    - It will install all dependencies

3. **Create a `.env` file in the root directory and add your MongoDB connection string:**

    ```sh
    MONGO_URI="mongodb://127.0.0.1:27017/travel"
    JWT_SECRET_KEY="aSdFgHjKl1234567890"
    ```

4. **Start the server:**

    ```sh
    npm start
    ```

## Packages Installed

### **express:** Fast, unopinionated, minimalist web framework for Node.js.

    ```sh
    npm install express
    ```

### **dotenv:** Loads environment variables from a .env file into process.env.

    ```sh
    npm install dotenv
    ```

### **mongoose:** MongoDB object modeling tool designed to work in an asynchronous environment.

    ```sh
    npm install mongoose
    ```

### **cors:** Middleware to enable CORS with various options.

    ```sh
    npm install cors
    ```

### **cookie-parser:** Parse Cookie header and populate req.cookies with an object keyed by the cookie names.

    ```sh
    npm install cookie-parser
    ```

### **morgan:** HTTP request logger middleware for Node.js.

    ```sh
    npm install morgan
    ```

### **bcryptjs:** Library to hash passwords.

    ```sh
    npm install bcryptjs
    ```

### **jsonwebtoken:** JSON Web Token implementation.

    ```sh
    npm install jsonwebtoken
    ```

### **express-validator:** A set of express.js middlewares that wraps validator.js validator and sanitizer functions.

    ```sh
    npm install express-validator
    ```

### **nodemon:** Utility that will monitor for any changes in your source and automatically restart your server.

    ```sh
    npm install nodemon
    ```

## **Changes Made**

### **Improved `index.js`**

- Added `morgan` for logging.
- Added error handling middleware.
- Ensured proper database connection handling.

### **Improved User Model with Validation**

- Added validation for user fields.

### **Improved `authController.js` with Validation and Error Handling**

- Added validation and error handling for user registration and login.

### **Improved `tourController.js` with Pagination and Search**

- Added pagination and search functionality for tours.

### **Improved `verifyToken.js` for Role-Based Access Control**

- Added role-based access control for routes.

## Running the Application

Ensure MongoDB is running.

Start the server:

```sh
npm start
```

The server will be running on [http://localhost:8000](http://localhost:8000).

