const express = require("express");
const router = express.Router();
const Listing = require("../models/listing"); // Adjust path to your Listing model

// Route to render userIndex.ejs
router.get("/userIndex", async (req, res) => {
    try {
        // Fetch all listings from the database
        const allListings = await Listing.find({}); // Assuming you have a `Listing` model
        res.render("listings/userIndex", { user: req.user, allListings });
    } catch (err) {
        console.error(err);
        req.flash("error", "Unable to load listings");
        res.redirect("/");
    }
});

module.exports = router;
