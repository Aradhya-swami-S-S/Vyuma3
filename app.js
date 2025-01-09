if (process.env.NODE_ENV != "production") {
    require('dotenv').config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const ExpressError = require("./utils/ExpressError.js");

// Import routes
const listingRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const authRoutes = require("./routes/auth");
const bookingsRoutes = require("./routes/bookings");
const userRoutes = require("./routes/userRoutes"); // Added userRoutes

// Database URL and connection
const dbUrl = process.env.DB_URL;

main()
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(dbUrl);
}

// Set up express-session and connect-flash for flash messages
const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET,
    },
    touchAfter: 24 * 3600,
});

store.on("error", (err) => {
    console.log("ERROR in MONGO SESSION STORE:", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000, // 1 week
        maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
        httpOnly: true,
    },
};

app.use(session(sessionOptions));
app.use(flash());

// Passport Configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware to set global variables
app.use((req, res, next) => {
    res.locals.currUser = req.user || null; // Ensure currUser is always defined
    res.locals.success = req.flash("success") || ""; // Default to an empty string if no flash message
    res.locals.error = req.flash("error") || ""; // Default to an empty string if no flash message
    console.log("Current User:", res.locals.currUser); // Debugging to ensure currUser is set
    next();
});

// Set view engine and static files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Define routes
app.use("/", authRoutes); // Handles signup/login/logout
app.use("/listings", listingRouter); // Handles listing pages
app.use("/listings/:id/reviews", reviewsRouter); // Handles reviews
app.use("/", userRouter); // Handles general user-related functionality
app.use("/", userRoutes); // Handles /userIndex route
app.use("/bookings", bookingsRoutes); // Handles bookings




// Catch-all route for undefined paths
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found!"));
});

// Global error handling middleware
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong!" } = err;
    res.status(statusCode).render("error.ejs", { message });
});

// Start server
app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
