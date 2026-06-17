# 🚀 WanderNest Setup & Installation Guide

Complete step-by-step guide to get WanderNest running on your machine.

---

## 📋 Prerequisites Checklist

- [ ] Node.js v14+ installed ([Download](https://nodejs.org/))
- [ ] Git installed ([Download](https://git-scm.com/))
- [ ] MongoDB Atlas account ([Create free account](https://www.mongodb.com/cloud/atlas))
- [ ] Text editor (VS Code recommended)
- [ ] Internet connection

---

## ⚙️ Step-by-Step Installation

### Step 1: Clone the Repository

```bash
git clone <your-repo-url>
cd WanderNest
```

### Step 2: Install Node Packages

```bash
npm install
```

**What this does:**
- Installs Express.js, MongoDB, Passport authentication
- Installs UI libraries (Bootstrap, Leaflet)
- Sets up all dependencies from package.json

### Step 3: Create `.env` File

Copy the example file:
```bash
cp .env.example .env
```

Now edit `.env` with your credentials (see sections below):

---

## 🔧 Configuration Setup

### A. MongoDB Atlas (Database) - REQUIRED

1. **Create MongoDB Account**
   - Go to [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
   - Click "Sign Up" (free tier available)
   - Create account with email

2. **Create a Cluster**
   - Click "Create a Deployment"
   - Choose "M0 Sandbox" (free tier)
   - Click "Create"
   - Wait 2-3 minutes for cluster to be ready

3. **Get Connection String**
   - Click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database password

4. **Add IP to Whitelist**
   - In MongoDB Atlas, go to "Security" → "Network Access"
   - Click "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Click "Confirm"

5. **Update `.env`**
   ```env
   ATLASDB_URL=mongodb+srv://username:password@cluster.mongodb.net/wandernest
   ```

### B. Session Secret - REQUIRED

Generate a random secret for session encryption:

```bash
# On macOS/Linux:
openssl rand -hex 32

# On Windows PowerShell:
-join (1..64 | ForEach-Object { '{0:X}' -f (Get-Random -Maximum 16) })
```

Add to `.env`:
```env
SECRET=your_random_secret_here
```

### C. Cloudinary (Image Upload) - OPTIONAL

Images won't upload without this, but app still works!

1. **Create Account**
   - Go to [cloudinary.com](https://cloudinary.com)
   - Click "Sign Up"
   - Choose "Hobby" plan (free)

2. **Get Credentials**
   - Go to Dashboard
   - Copy: Cloud Name, API Key, API Secret

3. **Update `.env`**
   ```env
   CLOUD_NAME=your_cloud_name
   CLOUD_API_KEY=your_api_key
   CLOUD_API_SECRET=your_api_secret
   ```

### D. Mapbox Token (Geocoding) - OPTIONAL

Maps work without this! Only needed for geocoding new listings.

1. **Create Account**
   - Go to [mapbox.com](https://www.mapbox.com)
   - Click "Sign up"

2. **Get Token**
   - Go to Account → Tokens
   - Copy your public token

3. **Update `.env`**
   ```env
   MAP_TOKEN=pk_your_token_here
   ```

### Final `.env` File Example

```env
# REQUIRED
ATLASDB_URL=mongodb+srv://user:pass@cluster.mongodb.net/wandernest
SECRET=abc123def456ghi789jkl012mno345pqr

# OPTIONAL (for image uploads)
CLOUD_NAME=my_cloud_name
CLOUD_API_KEY=12345678901234567890
CLOUD_API_SECRET=abcdefghijklmnopqrstuvwxyz

# OPTIONAL (for geocoding new listings)
MAP_TOKEN=pk_test123456789

# Environment
NODE_ENV=development
```

---

## 🗄️ Database Initialization

### Populate with Sample Data

```bash
node init/index.js
```

**This creates:**
- ✅ Seed admin user
  - Username: `seed-admin`
  - Password: `admin1234`
- ✅ 9 sample listings with locations and images
- ✅ Database schema and collections
- ✅ All with working map coordinates

---

## ▶️ Start the Server

```bash
node app.js
```

**Output should show:**
```
Connection Successful
```

**Access the app:**
- Browser: http://localhost:3000
- API: http://localhost:3000/listings

---

## ✅ Verification Checklist

### Homepage Works
- [ ] Browse to http://localhost:3000
- [ ] See "Find Your Perfect Place to Stay" hero
- [ ] See 9 sample listings in a grid
- [ ] Search bar is visible
- [ ] Category filters show (All, Beach, Mountains, etc.)

### Search & Filters Work
- [ ] Type in search box → Results filter instantly
- [ ] Click "Beach" filter → Only beach listings show
- [ ] Try different categories
- [ ] List count updates

### Listings Load
- [ ] Click on any listing
- [ ] See full details and description
- [ ] See reviews section (empty for sample listings)
- [ ] **See Leaflet map with location pin** ✅ MAP FIXED!

### Map Shows Location
- [ ] Scroll to "Where you'll be"
- [ ] See interactive map loaded
- [ ] See red marker on location
- [ ] Can zoom/pan map
- [ ] Click marker to see popup

### Authentication Works
- [ ] Click "Login" in navbar
- [ ] Enter: `seed-admin` / `admin1234`
- [ ] Login successful
- [ ] See "Add Listing" button
- [ ] See "Logout" in navbar

### Create Listing (After Login)
- [ ] Click "Add Listing"
- [ ] Fill in form:
  - Title: "My Test Property"
  - Description: "A wonderful place"
  - Price: "1000"
  - Location: "New York City"
  - Country: "United States"
- [ ] Upload an image (optional)
- [ ] Click "Create"
- [ ] Listing appears with map location!

---

## 🐛 Troubleshooting

### "Connection refused" on startup

**Problem:** Can't connect to MongoDB

**Solution:**
1. Check `.env` has correct `ATLASDB_URL`
2. Verify username/password correct
3. Check IP is whitelisted in MongoDB Atlas
4. Ensure internet connection active
5. Try connecting with MongoDB Compass to test

### Maps not showing

**Problem:** See blank map area on listing page

**Solution:**
1. Open browser console (F12)
2. Check for JavaScript errors
3. Verify Leaflet.js loaded (search for "leaflet" in console)
4. Try clearing browser cache
5. **Note:** Maps work without Mapbox token using free OpenStreetMap

### Images not uploading

**Problem:** Upload button doesn't work or errors

**Solution:**
1. Verify Cloudinary credentials in `.env`
2. Check API key permissions
3. Ensure `.env` file in root directory
4. Restart server after `.env` changes
5. Try smaller image file (< 5MB)
6. **Note:** App works without Cloudinary, just uses default image

### Listings page blank

**Problem:** No listings showing on homepage

**Solution:**
1. Run: `node init/index.js` (to seed database)
2. Check MongoDB connection is working
3. Check browser console for errors
4. Try refreshing page
5. Check database has data in MongoDB Atlas

### Login not working

**Problem:** Credentials not accepted

**Solution:**
1. Verify using: `seed-admin` / `admin1234`
2. Try re-seeding database: `node init/index.js`
3. Check browser cookies enabled
4. Try incognito/private browser mode
5. Check `/login` page loads without errors

### Search not working

**Problem:** Search bar doesn't filter listings

**Solution:**
1. Check JavaScript enabled in browser
2. Verify listings loaded first
3. Open browser console for errors
4. Try searching with simple text first
5. Clear browser cache

---

## 📊 Project Structure Review

After installation, verify these folders exist:

```
WanderNest/
├── node_modules/          # ✅ Created by npm install
├── controllers/            # ✅ Should exist
├── models/                 # ✅ Should exist  
├── routes/                 # ✅ Should exist
├── views/                  # ✅ Should exist
├── public/                 # ✅ Should exist (css, js)
├── init/                   # ✅ Should exist (for seeding)
├── utils/                  # ✅ Should exist
├── app.js                  # ✅ Should exist (main file)
├── .env                    # ✅ Created by you
├── .env.example            # ✅ Should exist
└── package.json            # ✅ Should exist
```

---

## 🎓 Common Commands

```bash
# Start the server
node app.js

# Seed database with sample data
node init/index.js

# Check Node version
node --version

# Check npm version
npm --version

# List installed packages
npm list

# Update all packages
npm update

# Clear npm cache
npm cache clean --force
```

---

## 🚀 Next Steps

After successful setup:

1. **Explore Features**
   - Test search/filters on homepage
   - View listings with maps
   - Create test account
   - Add test listing

2. **Customize**
   - Edit sample listings in `init/data.js`
   - Change colors in `public/css/style.css`
   - Add more features

3. **Deploy** (Optional)
   - Deploy to Heroku, Render, or Railway
   - MongoDB Atlas already in cloud
   - Cloudinary already in cloud

---

## 📞 Support

### Common Issues

| Issue | Solution |
|-------|----------|
| Port 3000 in use | Change PORT in app.js or kill process |
| Module not found | Run `npm install` |
| .env not loading | Restart server, check file path |
| Database errors | Check MongoDB connection string |
| Image upload fails | Check Cloudinary credentials |
| Map blank | Check Leaflet.js loaded in browser |

### Getting Help

1. Check browser console for errors (F12)
2. Check server terminal for error messages
3. Verify all `.env` variables set correctly
4. Try restarting the server
5. Check GitHub issues/discussions

---

## ✨ You're All Set!

🎉 If you've completed all steps and verified the checklist, WanderNest is ready to use!

**Enjoy exploring with WanderNest! 🌍✈️**
