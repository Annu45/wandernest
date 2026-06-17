# 🏡 WanderNest - Modern Travel Accommodation Platform

A full-stack vacation rental platform where users can discover, list, and review unique stays worldwide. Built with **Node.js, Express.js, MongoDB, EJS, Bootstrap, Cloudinary, and Leaflet.js**.

![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-ISC-green)
![Node.js](https://img.shields.io/badge/Node.js-Express-success)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green)

---

## 🌟 Overview

WanderNest is a modern accommodation marketplace inspired by platforms like Airbnb. Users can browse listings, create their own stays, upload images, leave reviews, and explore locations through interactive maps.

---

## ✨ Features

### 🔍 Smart Search & Filtering

- Real-time listing search
- Search by title, location, and keywords
- Category-based filtering
- Instant UI updates
- Responsive search experience

### 🗺️ Interactive Maps

- Leaflet.js integration
- OpenStreetMap tiles
- Listing location markers
- Responsive map interface
- Interactive popups with listing information

### 🔐 Authentication & Authorization

- Passport.js authentication
- Session-based login system
- Protected routes
- Ownership verification
- Persistent user sessions

### 🏠 Listing Management

- Create listings
- View listings
- Edit listings
- Delete listings
- Image upload support

### 🖼️ Image Uploads

- Cloudinary integration
- Multer file handling
- Optimized image delivery
- Multiple image format support

### ⭐ Reviews & Ratings

- 1–5 star rating system
- User reviews
- Review ownership validation
- Dynamic review display

### 💾 Database

- MongoDB Atlas
- Mongoose ODM
- Persistent storage
- Relationship management

---

## 🛠️ Tech Stack

| Category | Technologies |
|-----------|-------------|
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | Passport.js, Passport Local |
| Session Store | Express Session, Connect Mongo |
| Image Storage | Cloudinary, Multer |
| Maps | Leaflet.js, OpenStreetMap |
| Frontend | EJS, Bootstrap 5, Font Awesome |
| Validation | Joi |
| Utilities | dotenv, connect-flash, method-override |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB Atlas Account
- Cloudinary Account
- Git

---

### 1. Clone Repository

```bash
git clone https://github.com/Annu45/wandernest.git
cd WanderNest
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env` file:

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

MAP_TOKEN=your_mapbox_token

CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_cloud_api_key
CLOUD_API_SECRET=your_cloud_api_secret

NODE_ENV=development
```

### 4. Seed Database

```bash
node init/index.js
```

This loads sample listings and demo data.

### 5. Start Server

```bash
node app.js
```

Open:

```text
http://localhost:8080
```

---

## 📸 Screenshots

### Home Page

Add screenshot here:


<img width="1470" height="884" alt="image" src="https://github.com/user-attachments/assets/61e65802-ef73-485c-b850-96ce08bc4ebd" />


### Listing Details


<img width="1470" height="887" alt="image" src="https://github.com/user-attachments/assets/c4b1c2c2-5d19-4ed7-9385-1a175fefc20f" />


### Interactive Map


<img width="1470" height="885" alt="image" src="https://github.com/user-attachments/assets/a99196a5-e442-4fea-bdf5-dd459dab4cc0" />


---

## 📂 Project Structure

```text
WanderNest
│
├── controllers
│   ├── listing.js
│   ├── reviews.js
│   └── users.js
│
├── models
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views
│   ├── listings
│   ├── users
│   ├── includes
│   └── layouts
│
├── public
│   ├── css
│   └── js
│
├── init
│   ├── data.js
│   └── index.js
│
├── utils
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── cloudConfig.js
├── middleware.js
├── schema.js
├── app.js
├── package.json
└── README.md
```

---

## 📖 Main Routes

### Public Routes

```http
GET  /
GET  /listings
GET  /listings/:id
GET  /signup
GET  /login
```

### Protected Routes

```http
POST   /listings
GET    /listings/:id/edit
PUT    /listings/:id
DELETE /listings/:id

POST   /listings/:id/reviews
DELETE /listings/:id/reviews/:reviewId
```

---

## 🔒 Security Features

- Password hashing through passport-local-mongoose
- Protected routes
- Ownership-based authorization
- Environment variable protection
- Server-side validation with Joi
- Session persistence using MongoDB

---

## 🎨 UI Highlights

- Modern purple-themed design
- Responsive layout
- Interactive category filters
- Custom styled cards
- Smooth animations
- Interactive maps
- Mobile-friendly interface

---

## 🚧 Future Enhancements

- Booking system
- Payment integration (Stripe)
- Wishlist functionality
- User profile dashboard
- Email notifications
- Dark mode
- Advanced search filters
- Admin dashboard
- Real-time messaging

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push changes

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 📄 License

ISC License

---

## 👩‍💻 Author

### Annu Mathur

- GitHub: https://github.com/Annu45
- LinkedIn: https://www.linkedin.com/in/annumathur003/

---

## 🙏 Acknowledgements

- Express.js
- MongoDB Atlas
- Passport.js
- Cloudinary
- Bootstrap
- Leaflet.js
- OpenStreetMap

---

Made with ❤️ by **Annu Mathur**

Happy Exploring 🌍✈️
