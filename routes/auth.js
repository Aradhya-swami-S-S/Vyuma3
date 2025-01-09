const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");

// Render signup form
router.get("/signup", (req, res) => {
    res.render("users/signup");
});

// Handle signup
router.post("/signup", async (req, res, next) => {
    const { username, email, password, role } = req.body;
    try {
        const user = new User({ username, email, role });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, (err) => {
            if (err) return next(err);
            // Redirect based on role after successful signup
            const redirectUrl = role === "owner" ? "/listings" : "/userIndex";
            res.redirect(redirectUrl);
        });
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
});

// Render login form
router.get("/login", (req, res) => {
    res.render("users/login");
});

// Handle login
router.post(
    "/login",
    passport.authenticate("local", {
        failureFlash: true,
        failureRedirect: "/login",
    }),
    (req, res) => {
        // Redirect based on role after successful login
        const redirectUrl = req.user.role === "owner" ? "/listings" : "/userIndex";
        res.redirect(redirectUrl);
    }
);

// Logout
router.get("/logout", (req, res) => {
    req.logout(() => {
        req.flash("success", "Logged out!");
        res.redirect("/login");
    });
});

module.exports = router;
