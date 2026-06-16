# WanderNest 🌍

A full-stack vacation rental platform where users can discover, list, and review unique stays around the world. WanderNest provides a seamless booking-style experience with secure authentication, image uploads, location-based listings, and user reviews.

---

## ✨ Features

- 🔐 Session-based authentication using Passport.js and passport-local
- 🏠 Full CRUD functionality for property listings
- 🖼️ Image uploads and storage using Cloudinary and Multer
- 🗺️ Automatic geocoding with OpenStreetMap Nominatim
- ⭐ Review and rating system for listings
- 🔒 Authorization to ensure only listing owners can edit or delete their listings
- 💾 Persistent session management using MongoDB Atlas and connect-mongo
- 📱 Fully responsive user interface built with Bootstrap and custom CSS
- ⚡ Flash messages for user feedback and notifications
- ✅ Server-side validation using Joi

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|------------|
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | Passport.js, passport-local, passport-local-mongoose |
| Session Management | express-session, connect-mongo |
| Image Storage | Cloudinary, Multer |
| Templating | EJS, ejs-mate |
| Validation | Joi |
| Styling | Bootstrap 5, Custom CSS |
| Utilities | Method-Override, Connect-Flash |

---

## 🚀 Getting Started

### Prerequisites

Before running the project, make sure you have:

- Node.js (v18 or higher)
- MongoDB Atlas account
- Cloudinary account
- Git installed

---

### Installation

Clone the repository:

```bash
git clone https://github.com/Annu45/wandernest.git
cd wandernest/WanderNest
```

Install dependencies:

```bash
npm install
```

---

### Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/WanderNest

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

SECRET=your_session_secret_key

PORT=8080
```

---

### Seed the Database

Populate the database with sample listings:

```bash
node init/index.js
```

---

### Run the Application

Start the server:

```bash
node app.js
```

Or, if using nodemon:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:8080
```

---

## 📁 Project Structure

```text
WanderNest/
├── controllers/          # Route controller logic
├── models/               # Mongoose schemas
├── routes/               # Express routers
├── views/
│   ├── listings/
│   ├── users/
│   ├── includes/
│   └── layouts/
├── public/
│   ├── css/
│   └── js/
├── init/                 # Database seed scripts
├── utils/                # Utility functions & error handlers
├── cloudConfig.js        # Cloudinary configuration
├── middleware.js         # Authentication & validation middleware
├── schema.js             # Joi validation schemas
├── app.js                # Application entry point
├── package.json
└── README.md
```

---

## 🔒 Security

- Passwords securely hashed using passport-local-mongoose
- Session data stored in MongoDB Atlas
- Sensitive credentials stored in `.env`
- `.env` excluded from version control using `.gitignore`
- Server-side validation using Joi
- Protected routes and ownership-based authorization

---

## 👩‍💻 Author

**Annu Mathur**

- GitHub: https://github.com/Annu45
- LinkedIn: https://www.linkedin.com/in/annumathur003/

---
