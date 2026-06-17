# 🏡 WanderNest - Modern Travel Accommodation Platform

A full-featured MERN vacation rental platform where users can discover, list, and review unique stays worldwide. Built with Node.js, Express, MongoDB, and interactive mapping.

![Version](https://img.shields.io/badge/version-1.0.0-blue) ![License](https://img.shields.io/badge/license-ISC-green)

## ✨ Key Features

### 🔍 Advanced Search & Filtering
- **Real-time Search**: Filter listings by title, location, or keywords
- **Category Filters**: Browse by Beach, Mountains, Cities, Luxury, Cabins, etc.
- **Smooth Animations**: Beautiful fade-in effects when results update
- **Instant Results**: See matching listings immediately as you type

### 🗺️ Interactive Maps (FREE - No Mapbox required!)
- **Leaflet.js Maps**: Uses free OpenStreetMap tiles (no API key needed!)
- **Location Pins**: Shows exact listing location with custom red markers
- **Responsive Design**: Maps automatically adjust to screen size
- **Popup Information**: Click markers to see listing details
- **Professional Styling**: Beautiful map integration with rounded corners and shadows

### 🔐 Secure Authentication
- **Passport.js Integration**: Industry-standard authentication
- **Password Hashing**: Secure password storage
- **Session Persistence**: MongoDB session store
- **Protected Routes**: Only authenticated users can create/edit listings

### 🏠 Full CRUD for Listings
- **Create**: Add new listings with images and details
- **Read**: Browse all listings with details and reviews
- **Update**: Edit your own listings
- **Delete**: Remove listings you own

### 🖼️ Professional Image Management
- **Cloudinary Integration**: Automatic image optimization
- **Multer Upload**: Secure file handling
- **Image Transformation**: Responsive image sizing
- **Multiple Formats**: Support for various image types

### ⭐ Review & Rating System
- **Star Ratings**: 1-5 star system with visual display
- **User Comments**: Detailed review text
- **Author Attribution**: Reviews show reviewer information
- **Owner Controls**: Only listing owners can delete reviews
- **Review Count**: Display total reviews per listing

### 💾 Data Persistence
- **MongoDB Atlas**: Cloud database hosting
- **Session Storage**: Persistent user sessions
- **Automatic Backups**: MongoDB Atlas backup features
- **Real-time Sync**: Immediate data updates

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|------------|
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB Atlas, Mongoose |
| **Authentication** | Passport.js, passport-local |
| **Session Management** | express-session, connect-mongo |
| **Image Storage** | Cloudinary, Multer |
| **Maps** | Leaflet.js (FREE - no API key!) |
| **Templating** | EJS, ejs-mate |
| **Frontend** | Bootstrap 5, Custom CSS, Font Awesome |
| **Validation** | Joi, Server-side validation |
| **Utilities** | Method-Override, Connect-Flash, dotenv |

---

## 🚀 Quick Start Guide

### Prerequisites

- **Node.js** v14+ ([Download](https://nodejs.org/))
- **MongoDB Atlas** account (free tier available) ([Create](https://www.mongodb.com/cloud/atlas))
- **Cloudinary** account (optional, for image uploads) ([Free account](https://cloudinary.com/))
- **Git** installed

### Step 1: Clone Repository

```bash
git clone <repository-url>
cd WanderNest
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Setup Environment Variables

Create `.env` file (copy from `.env.example`):

```bash
cp .env.example .env
```

Edit `.env` and add your credentials:

```env
# MongoDB Atlas Connection
ATLASDB_URL=mongodb+srv://username:password@cluster.mongodb.net/wandernest

# Session Secret (use any random string)
SECRET=your_secret_key_here_change_this

# Mapbox Token (OPTIONAL - only needed for geocoding new listings)
MAP_TOKEN=pk_your_mapbox_token_here

# Cloudinary Credentials (for image uploads)
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret

# Environment
NODE_ENV=development
```

### Step 4: Initialize Database with Sample Data

```bash
node init/index.js
```

This creates:
- ✅ Seed admin user (username: `seed-admin`, password: `admin1234`)
- ✅ 9 sample listings with real coordinates
- ✅ Database schema and indexes

### Step 5: Start the Server

```bash
node app.js
```

The app will run at: **http://localhost:3000**

### Step 6: Test the Application

1. **Homepage** (http://localhost:3000/)
   - View all 9 sample listings
   - Try the search bar
   - Click category filters

2. **Login**
   - Use credentials: `seed-admin` / `admin1234`
   - Test creating a new listing

3. **Browse Listings**
   - Click any listing to see details
   - View the interactive Leaflet map
   - Read reviews

4. **Leave a Review**
   - Login first
   - Click a listing
   - Scroll to "Leave a Review"
   - Add rating and comment

---

## 📂 Project Structure

```
WanderNest/
├── controllers/
│   ├── listing.js      # Create, Read, Update, Delete listings
│   ├── reviews.js      # Manage reviews and ratings
│   └── users.js        # User authentication logic
├── models/
│   ├── listing.js      # Listing data schema
│   ├── review.js       # Review data schema
│   └── user.js         # User authentication schema
├── routes/
│   ├── listing.js      # GET/POST/PUT/DELETE listing routes
│   ├── review.js       # Review routes
│   └── user.js         # Auth routes (login/signup)
├── views/
│   ├── listings/
│   │   ├── index.ejs   # All listings (with search/filter)
│   │   ├── show.ejs    # Single listing detail + map
│   │   ├── new.ejs     # Create listing form
│   │   └── edit.ejs    # Edit listing form
│   ├── users/
│   │   ├── login.ejs   # Login page
│   │   └── signup.ejs  # Signup page
│   ├── Layouts/
│   │   └── boilerplate.ejs   # Main HTML template
│   ├── includes/
│   │   ├── navbar.ejs        # Navigation bar
│   │   ├── footer.ejs        # Footer
│   │   └── flash.ejs         # Flash messages
│   └── error.ejs       # Error page
├── public/
│   ├── css/
│   │   ├── style.css        # Main stylesheet (1000+ lines)
│   │   └── rating.css       # Star rating component
│   └── js/
│       ├── map.js           # Leaflet map initialization
│       ├── script.js        # Search, filter, wishlist functions
│       └── script.js        # Utility functions
├── utils/
│   ├── ExpressError.js      # Custom error class
│   └── wrapAsync.js         # Async error wrapper middleware
├── init/
│   ├── index.js             # Database initialization script
│   └── data.js              # 9 sample listings with coordinates
├── app.js                   # Main Express application
├── cloudConfig.js           # Cloudinary configuration
├── middleware.js            # Custom middleware
├── schema.js                # Joi validation schemas
├── package.json             # Dependencies and scripts
├── .env.example             # Environment variables template
└── README.md                # This file
```

---

## 🎨 Design & Styling

### Color Palette & Typography

- **Primary Color**: Purple (#7C3AED)
- **Secondary Color**: Gold/Amber (#F59E0B)
- **Accent Colors**: Green (#10B981), Red (#EF4444)
- **Typography**: 
  - Headers: Playfair Display (serif, elegant)
  - Body: Plus Jakarta Sans (modern, clean)

### Features

- **Gradient Effects**: Beautiful purple-to-blue gradients on hero section
- **Smooth Animations**: Hover effects, smooth transitions, fade-in animations
- **Responsive Design**: Mobile-first approach, works on all screen sizes
- **Dark Mode Ready**: CSS variables for easy theme switching

---

## 🔧 Configuration & Setup

### MongoDB Atlas Setup

1. Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a cluster
4. Get your connection string
5. Add to `.env`:
```env
ATLASDB_URL=mongodb+srv://username:password@cluster.mongodb.net/wandernest
```

### Cloudinary Setup (For Image Uploads)

1. Sign up at [Cloudinary](https://cloudinary.com) (free tier available)
2. Get your credentials from the dashboard
3. Add to `.env`:
```env
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
```

### Mapbox Token (Optional - Only for Geocoding New Listings)

**Note:** Maps still work without this! Leaflet uses free OpenStreetMap tiles.

1. Create account at [Mapbox](https://www.mapbox.com)
2. Get your public token
3. Add to `.env`:
```env
MAP_TOKEN=pk_your_mapbox_token
```

---

## 📖 Usage Guide

### For Users

1. **Browse Listings**
   - Go to homepage
   - Use search bar to find listings
   - Click category buttons to filter by type
   - Click on any listing to see details

2. **View Location**
   - Click on a listing
   - Scroll down to "Where you'll be"
   - Interactive Leaflet map shows exact location
   - Click marker for listing info

3. **Leave a Review**
   - Login to your account
   - Go to any listing
   - Scroll to "Leave a Review"
   - Select star rating (1-5)
   - Write your comment
   - Submit

4. **Create Your Own Listing**
   - Login to account
   - Click "Add Listing" button
   - Fill in all details
   - Upload an image
   - Choose location (will be geocoded)
   - Submit
   - Listing appears immediately with map

### For Developers

#### API Routes

**Public Routes:**
```
GET  /              → Homepage (redirects to /listings)
GET  /listings      → View all listings
GET  /listings/:id  → View listing details with map and reviews
GET  /signup        → Signup form
GET  /login         → Login form
```

**Protected Routes (Require Login):**
```
POST   /listings                  → Create new listing
GET    /listings/:id/edit         → Edit listing form
PUT    /listings/:id              → Update listing
DELETE /listings/:id              → Delete listing

POST   /listings/:id/reviews      → Add review
DELETE /listings/:id/reviews/:rid → Delete review (owner only)
```

#### Middleware

- `isLoggedIn` - Ensures user is authenticated
- `isOwner` - Ensures user owns the resource
- Joi validation schemas in `schema.js`

---

## 🐛 Troubleshooting

### Map Not Showing?
✅ **Solution**: 
- Check browser console (F12) for errors
- Ensure listing has proper coordinates
- Clear browser cache and refresh
- Try a sample listing first
- Leaflet maps should work in any browser

### Search/Filters Not Working?
✅ **Solution**:
- Ensure JavaScript is enabled
- Clear browser cache
- Check that listings are in database
- Open browser console to see errors
- Try the sample listings first

### Images Not Uploading?
✅ **Solution**:
- Verify Cloudinary credentials in `.env`
- Check API key permissions in Cloudinary
- Ensure `.env` file is in root directory
- Restart server after changing `.env`
- Check file size (should be < 10MB)

### Database Connection Error?
✅ **Solution**:
- Verify MongoDB connection string
- Check username/password in connection string
- Add your IP to MongoDB Atlas whitelist
- Ensure internet connection is active
- Try connecting from MongoDB Compass

### Port Already in Use?
✅ **Solution**:
```bash
# Kill process on port 3000 (macOS/Linux)
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

---

## 🚀 Performance Optimization

- **Image Optimization**: Cloudinary handles resizing and compression
- **Lazy Loading**: Images load as user scrolls
- **Session Caching**: MongoDB session store caches user sessions
- **Responsive Images**: Different sizes for different screen sizes
- **CSS Minification**: Production-ready CSS

---

## 🔒 Security Best Practices

✅ **Implemented:**
- Password hashing with bcrypt (via Passport)
- CSRF protection via method-override middleware
- Input validation with Joi schemas
- Authorization checks for listing/review operations
- Environment variables for sensitive data
- SQL injection prevention (MongoDB doesn't use SQL)
- XSS protection via EJS templating

⚠️ **Recommendations for Production:**
- Use HTTPS only
- Enable CORS properly
- Add rate limiting
- Use helmet.js for HTTP headers
- Add request logging
- Set up error monitoring (Sentry)
- Use environment-specific configs

---

## 📊 Database Schema

### Listing Schema
```javascript
{
  title: String,
  description: String,
  price: Number,
  location: String,
  country: String,
  image: { url: String, filename: String },
  owner: ObjectId (User),
  reviews: [ObjectId] (Review),
  geometry: {
    type: "Point",
    coordinates: [longitude, latitude]
  }
}
```

### Review Schema
```javascript
{
  comment: String,
  rating: Number (1-5),
  author: ObjectId (User),
  listing: ObjectId (Listing)
}
```

### User Schema
```javascript
{
  email: String,
  username: String,
  hash: String (password hash),
  salt: String (password salt)
}
```

---

## 🎓 Learning Resources

- [Express.js Documentation](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Mongoose Documentation](https://mongoosejs.com)
- [Passport.js Authentication](http://www.passportjs.org)
- [Leaflet.js Maps](https://leafletjs.com)
- [Bootstrap 5 Documentation](https://getbootstrap.com)

---

## 🌟 Features Showcase

### Search & Filter Demo
```
User types "beach" → Instant results show beach properties
User clicks "Mountains" → Only mountain listings appear
User searches "New York" → NYC listings filter in real-time
```

### Map Integration
```
User clicks listing → Map loads instantly
User zooms/pans → Responsive map controls
User clicks marker → Popup shows listing title & location
```

### Review System
```
User logs in → Sees "Leave a Review" section
User rates property → Shows star rating
User adds comment → Comment is saved
User submits → Review appears immediately
```

---

## 🚧 Future Enhancements

- [ ] Advanced price range filters
- [ ] Booking calendar system
- [ ] Payment integration (Stripe)
- [ ] Email notifications
- [ ] User profile customization
- [ ] Admin dashboard
- [ ] Analytics & insights
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Real-time chat messaging
- [ ] Wishlist functionality
- [ ] Advanced search with autocomplete

---

## 📄 License

**ISC License** - Feel free to use this project for personal or commercial purposes!

---

## 🤝 Contributing

Contributions are welcome! 

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Support & Contact

- 📖 Check the README for common issues
- 🐛 Found a bug? Open an issue on GitHub
- 💬 Have questions? Open a discussion
- 📮 Email support available

---

## 🎉 Acknowledgments

- Bootstrap team for the amazing CSS framework
- Leaflet team for free mapping library
- MongoDB for excellent database
- Cloudinary for image hosting
- Passport.js for authentication

---

**Made with ❤️ by the WanderNest Team**

**Happy exploring! 🌍✈️🏖️**
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
