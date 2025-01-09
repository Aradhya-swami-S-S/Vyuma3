const express = require("express");
const router = express.Router();
const Booking = require("../models/booking.js"); // Replace with your booking schema
const bookingsController = require("../controllers/booking");
const { isLoggedIn } = require("../middleware"); // Middleware to check if user is logged in

router.post("/", isLoggedIn, bookingsController.createBooking);

// Route to get user bookings
router.get("/", isLoggedIn, bookingsController.getUserBookings);

// Route to handle the booking
router.post("/", async (req, res) => {
  try {
    const { resortId, resortName, resortPrice } = req.body;

    // Add the booking to the database (adjust this logic for your schema)
    const newBooking = new Booking({
      resortId,
      resortName,
      resortPrice,
      user: req.user._id, // Assuming user is logged in
    });
    await newBooking.save();

    // Flash success message
    req.flash("success", "Booking confirmed successfully!");
    res.redirect("/userIndex"); // Redirect back to the user page
  } catch (error) {
    req.flash("error", "Something went wrong with the booking!");
    res.redirect("/userIndex");
  }
});

module.exports = router;
