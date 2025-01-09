const Booking = require("../models/booking");
const Listing = require("../models/listing");

// Controller to create a booking
exports.createBooking = async (req, res, next) => {
    try {
        const { resortId, resortName, resortPrice } = req.body;

        // Ensure the listing exists
        const listing = await Listing.findById(resortId);
        if (!listing) {
            req.flash("error", "Resort not found!");
            return res.redirect("/userIndex");
        }

        // Create a new booking
        const booking = new Booking({
            user: req.user._id,
            resort: {
                id: resortId,
                name: resortName || listing.title,
                price: resortPrice || listing.price,
            },
            createdAt: new Date(),
        });

        await booking.save();
        req.flash("success", "Booking successfully created!");
        res.redirect("/bookings");
    } catch (err) {
        next(err);
    }
};

// Controller to get all bookings for the logged-in user
exports.getUserBookings = async (req, res, next) => {
    try {
        // Fetch bookings and populate resort details
        const bookings = await Booking.find({ user: req.user._id }).populate({
            path: "resort.id",
            select: "title image",
        });

        res.render("users/bookings", { bookings });
    } catch (err) {
        next(err);
    }
};
