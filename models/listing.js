const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
 image: {
    type: String,
    default:"https://unsplash.com/illustrations/a-house-with-trees-and-bushes-around-it-LtBrY2xXvXE",
    set: (v) => 
        v === "" 
        ? "https://unsplash.com/illustrations/a-house-with-trees-and-bushes-around-it-LtBrY2xXvXE"
        : v,
}, 
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;