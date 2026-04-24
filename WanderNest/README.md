# WanderNest 🌍

A full-stack Airbnb-inspired vacation rental platform where users can discover, list, and review unique stays around the world.

![WanderNest Preview](./public/images/preview.png)

## ✨ Features

- 🔐 User authentication (Sign Up / Log In / Log Out) with Passport.js
- 🏠 Full CRUD for listings — create, view, edit, delete
- 🖼️ Image uploads via Cloudinary + Multer
- 🗺️ Automatic geocoding with OpenStreetMap Nominatim
- ⭐ Reviews with star ratings per listing
- 🔒 Authorization — only listing owners can edit/delete
- 💾 Sessions stored in MongoDB Atlas via connect-mongo
- 📱 Fully responsive UI with Bootstrap + custom CSS

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Auth | Passport.js, passport-local |
| Storage | Cloudinary, Multer |
| Templating | EJS, ejs-mate |
| Validation | Joi |
| Styling | Bootstrap 5, Custom CSS |

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB Atlas account
- Cloudinary account

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/WanderNest.git
cd WanderNest
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/WanderNest
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
SECRET=your_session_secret_key
PORT=8080
```

### Seed the Database

```bash
node init/index.js
```

### Run the App

```bash
node app.js
```

Visit `http://localhost:8080`

## 📁 Project Structure

```
WanderNest/
├── controllers/       # Route logic
├── models/            # Mongoose schemas
├── routes/            # Express routers
├── views/             # EJS templates
│   ├── listings/
│   ├── users/
│   ├── includes/
│   └── Layouts/
├── public/            # Static assets (CSS, JS)
├── init/              # Database seed script
├── utils/             # Error handling helpers
├── cloudConfig.js     # Cloudinary setup
├── middleware.js      # Auth & validation middleware
├── schema.js          # Joi validation schemas
└── app.js             # Entry point
```

## 🔒 Security

- Passwords hashed via passport-local-mongoose
- Sessions encrypted with a secret key
- `.env` excluded from version control via `.gitignore`
- Input validated server-side with Joi

## 📄 License

MIT © 2025 WanderNest Private Limited