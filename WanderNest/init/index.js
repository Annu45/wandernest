if (process.env.NODE_ENV != "production") {
    require('dotenv').config({ path: require('path').join(__dirname, '../.env') });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const dbUrl = process.env.ATLASDB_URL;

if (!dbUrl) {
    console.error("ERROR: ATLASDB_URL is not set in .env file");
    process.exit(1);
}

main().then(() => {
    console.log("connected to DB");
}).catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
}

const initDB = async () => {
    // Create or find a seed user
    let seedUser = await User.findOne({ username: "seed-admin" });
    if (!seedUser) {
        seedUser = new User({ email: "admin@wandernest.com", username: "seed-admin" });
        await User.register(seedUser, "admin1234");
    }

    await Listing.deleteMany({});
    const formattedData = initData.data.map(item => ({
        ...item,
        image: typeof item.image === "string"
            ? { url: item.image, filename: "seed" }
            : item.image,
        owner: seedUser._id,
    }));
    await Listing.insertMany(formattedData);
    console.log("data was initialized");
};

initDB();