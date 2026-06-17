# ⚡ WanderNest Quick Start (5 Minutes)

## 🚀 Get Started in 5 Steps

### Step 1: Setup (1 min)
```bash
# Clone & install
git clone <repo-url>
cd WanderNest
npm install
```

### Step 2: Configure (2 min)
```bash
# Copy template
cp .env.example .env

# Edit .env and add:
# - MongoDB connection string (required)
# - Random secret key (required)
# - Cloudinary keys (optional)
# - Mapbox token (optional)
```

**Get MongoDB string:**
1. Visit [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create free account → Create cluster → Get connection string
3. Add IP to whitelist (allow all for development)

### Step 3: Seed Database (1 min)
```bash
node init/index.js
```

Creates:
- Admin user: `seed-admin` / `admin1234`
- 9 sample listings with maps
- All ready to go!

### Step 4: Start Server (1 min)
```bash
node app.js
```

Should output: `Connection Successful`

### Step 5: Visit App (0 min)
```
http://localhost:3000
```

---

## ✅ What to Test

### Homepage
- ✅ See 9 sample listings
- ✅ Search works (try "beach")
- ✅ Filters work (click "Mountain")

### Listing Detail
- ✅ Click any listing
- ✅ See map with location pin
- ✅ Map is interactive (zoom/pan)

### Authentication
- ✅ Click Login
- ✅ Use: `seed-admin` / `admin1234`
- ✅ Click "Add Listing"

### Create Listing
- ✅ Fill form with test data
- ✅ Click "Create"
- ✅ New listing appears with map!

---

## 🔧 Essential .env Variables

```env
# MUST HAVE (get from MongoDB Atlas)
ATLASDB_URL=mongodb+srv://user:pass@cluster.mongodb.net/wandernest

# MUST HAVE (any random string)
SECRET=abc123xyz789

# OPTIONAL (for image uploads)
CLOUD_NAME=your_name
CLOUD_API_KEY=your_key
CLOUD_API_SECRET=your_secret

# OPTIONAL (for geocoding)
MAP_TOKEN=pk_your_token
```

---

## 🗺️ Map Status: FIXED ✅

- Uses **Leaflet.js** (FREE! No API key needed)
- Shows **real OpenStreetMap** tiles
- **9 sample listings** with coordinates
- **Fully responsive** and mobile-ready
- **Try it now** → Click any listing → See map with pin

---

## 🔍 Search Status: FIXED ✅

- **Search bar** at top → Type to find listings
- **Category filters** → Click to narrow down
- **Real-time results** → Updates as you type
- **Wishlist hearts** → Click to save favorites
- **Try it now** → Search "New York" or click "Beach" filter

---

## 📱 Mobile Ready

- Responsive design works on all devices
- Maps scale to screen size
- Search works on mobile
- Touch-friendly buttons
- Test on phone!

---

## 🐛 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| "Connection refused" | Check MongoDB connection string in `.env` |
| Map blank | Already fixed! Try clearing browser cache |
| Search not working | Already fixed! Reload page |
| Images don't upload | Add Cloudinary credentials (optional) |
| Login fails | Use `seed-admin` / `admin1234` |
| Port in use | Change port or kill process |

---

## 📚 Full Documentation

- **README.md** - Features & overview
- **SETUP.md** - Detailed installation
- **IMPROVEMENTS.md** - All fixes made
- **This file** - Quick reference

---

## 🎓 Key Files

```
app.js                  ← Main server (start here)
controllers/listing.js  ← Listing logic
public/js/map.js       ← Map (NOW FIXED WITH LEAFLET!)
public/js/script.js    ← Search/filters (NOW WORKS!)
init/index.js          ← Seed database
views/listings/        ← HTML templates
```

---

## 🎯 Next Steps

### After Verifying Everything Works
1. Customize listing data in `init/data.js`
2. Update colors in `public/css/style.css`
3. Add more features (booking, payments, etc.)
4. Deploy to Heroku/Render

### Deployment Ready
- App is production-ready
- All major bugs fixed
- Proper error handling
- Responsive design
- Secure authentication

---

## 💡 Pro Tips

✅ **Maps work WITHOUT Mapbox token!**
- Uses free OpenStreetMap
- Same professional look
- Saves money!

✅ **Search happens instantly**
- No page reload needed
- Results update in real-time
- Works with category filters too

✅ **Sample data has real coordinates**
- All 9 listings have GPS coordinates
- Maps show correct locations immediately
- Try them all!

✅ **No image upload required to test**
- Cloudinary is optional
- App uses default image if missing
- Focus on other features first

---

## 🚀 You're All Set!

If you've completed all 5 steps, **WanderNest is ready to go!**

**Problems?**
- Check SETUP.md for detailed help
- Check browser console (F12) for errors
- Verify all `.env` variables set
- Restart server after config changes

**Happy exploring! 🌍✈️**

---

**Need help?** Check the documentation files or see SETUP.md troubleshooting section.
