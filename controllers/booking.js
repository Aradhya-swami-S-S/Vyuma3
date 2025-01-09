const Booking = require("../models/booking"); // Import Booking model

// Controller to handle booking creation
exports.createBooking = async (req, res, next) => {
    try {
        const { resortId, resortName, resortPrice } = req.body; // Extract booking details from the form
        const userId = req.user._id; // Assume user is authenticated and `req.user` contains their info

        // Create a new booking
        const booking = new Booking({
            user: userId,
            resort: {
                id: resortId,
                name: resortName,
                price: resortPrice
            },
            createdAt: new Date()
        });

        await booking.save(); // Save the booking to the database

        req.flash("success", "Booking successful!");
        res.redirect("/users/bookings"); // Redirect to the user's bookings page
    } catch (err) {
        next(err); // Pass errors to global error handler
    }
};

// Controller to get all bookings for a user
exports.getUserBookings = async (req, res, next) => {
    try {
        const bookings = await Booking.find({ user: req.user._id }); // Fetch bookings for the logged-in user
        res.render("users/bookings", { bookings }); // Render a view to display bookings
    } catch (err) {
        next(err); // Pass errors to global error handler
    }
};
