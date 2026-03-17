# Node.js RBAC API 🛡️

A secure and robust Node.js backend API built with Express and MongoDB. It implements JSON Web Token (JWT) authentication and Role-Based Access Control (RBAC) to efficiently manage user identities and secure protected resources based on assigned roles (e.g., Admin, User).

## Features ✨

- **User Authentication:** Secure user registration and login utilizing JWT.
- **Role-Based Authorization:** Fine-grained access control based on user roles.
- **Protected Routes:** Custom Express middleware to verify tokens and enforce role requirements.
- **Database Integration:** Structured data persistence using MongoDB.

## Tech Stack 🛠️

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)

## Folder Structure 📁

```text
.
├── src/
│   ├── config/          # Database connection setup (dbConnect.js)
│   ├── controllers/     # Authentication business logic (authController.js)
│   ├── middlewares/     # JWT verification and role checking (authMiddleware.js, roleMiddleware.js)
│   ├── models/          # MongoDB schemas and models (userModel.js)
│   ├── routes/          # API route definitions (authRoutes.js, userRoutes.js)
│   └── index.js         # Entry point of the Express application
├── .env                 # Environment variables configuration
└── package.json         # Project metadata and dependencies
```

## Installation 🚀

1. Clone the repository and navigate into the project directory:
   ```bash
   cd nodejs-rbac
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

## Environment Variables ⚙️

Create a `.env` file in the root directory and configure the following variables:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/nodejs-rbac
JWT_SECRET=your_super_secret_jwt_key
```

## How to Run the Server 🏃‍♂️

To start the development server, run:

```bash
npm run dev
```

*Alternatively, start the server directly using Node:*
```bash
node src/index.js
```

The server will initialize and connect to the MongoDB database.

## API Endpoints Overview 🔌

### Auth Routes
- `POST /api/auth/register` - Create a new user account
- `POST /api/auth/login` - Authenticate a user and return a JWT

### User Routes *(Protected)*
- `GET /api/users/profile` - Retrieve the profile of the authenticated user
- `GET /api/users/admin` - Access restricted data (Requires Admin role middleware)

*(Note: Base paths may vary slightly based on your exact `index.js` routing setup.)*

## Future Improvements 🔮

- Implement refresh tokens for better session management.
- Add security headers and rate-limiting (e.g., Helmet, Express Rate Limit).
- Set up structured logging (e.g., Morgan, Winston).
- Include comprehensive unit and integration tests (e.g., Jest, Supertest).
- Add an email service for password resets.

## License 📄

This project is licensed under the MIT License.
