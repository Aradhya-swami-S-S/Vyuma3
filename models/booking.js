const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    resort: {
        id: {
            type: Schema.Types.ObjectId,
            ref: "Listing",
            required: true,
        },
        name: String,
        price: Number,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Booking", bookingSchema);
