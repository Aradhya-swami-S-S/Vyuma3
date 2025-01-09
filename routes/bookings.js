const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const { isLoggedIn } = require("../middleware");

router.post("/", isLoggedIn, async (req, res) => {
  try {
    const { resortId, resortName, resortPrice } = req.body;

    const newBooking = new Booking({
      user: req.user._id,
      resort: {
        id: resortId,
        name: resortName,
        price: resortPrice,
      },
    });

    await newBooking.save();
    req.flash("success", "Booking confirmed successfully!");
    res.redirect("/userIndex");
  } catch (error) {
    console.error("Error creating booking:", error);
    req.flash("error", "Something went wrong with the booking!");
    res.redirect("/userIndex");
  }
});

// Fetch user bookings
router.get("/", isLoggedIn, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate("resort.id");
    res.render("users/bookings", { bookings });
  } catch (error) {
    console.error("Error fetching bookings:", error);
    req.flash("error", "Failed to fetch bookings!");
    res.redirect("/userIndex");
  }
});

router.delete("/:id", isLoggedIn, async (req, res) => {
  try {
    const { id } = req.params;

    // Remove the booking from the database
    await Booking.findByIdAndDelete(id);

    req.flash("success", "Booking canceled successfully!");
    res.redirect("/bookings"); // Redirect to the bookings page
  } catch (error) {
    console.error("Error canceling booking:", error);
    req.flash("error", "Failed to cancel booking!");
    res.redirect("/bookings");
  }
});

module.exports = router;
