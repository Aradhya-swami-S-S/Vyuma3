const express = require("express");
const router = express.Router();
const Listing = require("../models/listing");

router.get("/userIndex", async (req, res) => {
  try {
    const allListings = await Listing.find({});
    res.render("listings/userIndex", { allListings });
  } catch (error) {
    console.error("Error fetching listings:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
