const Listing = require("../models/listing.js");
const mbxGeoCoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mapToken ? mbxGeoCoding({ accessToken: mapToken }) : null;

// Default coordinates (San Francisco) for fallback
const DEFAULT_COORDS = [-122.4194, 37.7749];

module.exports.index = async (req,res)=>{
    try {
        const listings = await Listing.find({});
        res.render("listings/index.ejs", { listings });
    } catch (err) {
        req.flash("error", "Error loading listings");
        res.redirect("/");
    }
};

module.exports.renderNewForm = async (req,res)=>{
    res.render("listings/new.ejs");
};

module.exports.showListing = async (req,res)=>{
    try {
        let { id } = req.params;
        const listing = await Listing.findById(id)
            .populate("owner")
            .populate({
                path: "reviews",
                populate: { path: "author" }
            });
        
        if (!listing) {
            req.flash("error", "Listing you requested for does not exist!");
            return res.redirect("/listings");
        }
        
        // Ensure listing has geometry (fallback if missing)
        if (!listing.geometry || !listing.geometry.coordinates) {
            listing.geometry = {
                type: "Point",
                coordinates: DEFAULT_COORDS
            };
        }
        
        res.render("listings/show.ejs", { listing });
    } catch (err) {
        req.flash("error", "Error loading listing");
        res.redirect("/listings");
    }
};

module.exports.createListing = async(req, res, next) => {
    try {
        let coordinate = DEFAULT_COORDS; // Default fallback

        // Try to geocode if location is provided and token exists
        if (req.body.listing.location && geocodingClient) {
            try {
                const response = await geocodingClient.forwardGeocode({
                    query: req.body.listing.location,
                    limit: 1,
                })
                .send();

                if (response.body.features && response.body.features.length > 0) {
                    coordinate = response.body.features[0].geometry.coordinates;
                }
            } catch (geocodeErr) {
                console.warn("Geocoding failed, using default coordinates:", geocodeErr.message);
                // Continue with default coordinates
            }
        } else if (req.body.listing.location && !geocodingClient) {
            console.warn("Mapbox token not provided, using default coordinates for location:", req.body.listing.location);
        }

        let url = req.file ? req.file.path : "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800";
        let filename = req.file ? req.file.filename : "default";

        const listing = req.body.listing;
        const newListing = new Listing(listing);

        newListing.owner = req.user._id;
        newListing.image = { url, filename };
        newListing.geometry = {
            type: "Point",
            coordinates: coordinate
        };

        let savedListing = await newListing.save();
        console.log("Listing created:", savedListing.title);
        req.flash("Success", "New Listing Created!");
        res.redirect("/listings");
    } catch (err) {
        console.error("Error creating listing:", err);
        req.flash("error", "Error creating listing: " + err.message);
        res.redirect("/listings/new");
    }
};

module.exports.renderEditForm = async (req,res)=>{
    try {
        let { id } = req.params;
        const listing = await Listing.findById(id);
        
        if (!listing) {
            req.flash("error", "Listing you requested for does not exist!");
            return res.redirect("/listings");
        }
        
        let originalImageUrl = listing.image.url;
        originalImageUrl = originalImageUrl.replace("/upload", "/upload/w_250");
        res.render("listings/edit.ejs", { listing, originalImageUrl });
    } catch (err) {
        req.flash("error", "Error loading listing");
        res.redirect("/listings");
    }
};

module.exports.updateListing = async(req, res) => {
    try {
        let { id } = req.params;
        let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }, { new: true });
        
        if (!listing) {
            req.flash("error", "Listing not found");
            return res.redirect("/listings");
        }

        // Update image if a new one was provided
        if (typeof req.file != "undefined") {
            let url = req.file.path;
            let filename = req.file.filename;
            listing.image = { url, filename };
            await listing.save();
        }

        req.flash("Success", "Listing Updated!");
        res.redirect(`/listings/${id}`);
    } catch (err) {
        console.error("Error updating listing:", err);
        req.flash("error", "Error updating listing");
        res.redirect(`/listings/${id}`);
    }
};

module.exports.deleteListing = async (req, res) => {
    try {
        let { id } = req.params;
        const deletedListing = await Listing.findByIdAndDelete(id);
        
        if (!deletedListing) {
            req.flash("error", "Listing not found");
            return res.redirect("/listings");
        }

        req.flash("Success", "Listing Deleted!");
        res.redirect("/listings");
    } catch (err) {
        console.error("Error deleting listing:", err);
        req.flash("error", "Error deleting listing");
        res.redirect("/listings");
    }
};