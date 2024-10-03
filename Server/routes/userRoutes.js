const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcryptjs');
const passport = require('passport');
const ensureAuthenticated = require('../middleware/authMiddleware');


// Route for creating/updating a user profile (no image handling)
router.post("/profile", async (req, res) => {
  const { username, name, mobile, comment } = req.body;

  console.log("Received Data:", req.body); // Log received data for debugging

  try {
    // Validate required fields
    if (!username || !name) {
      return res.status(400).json({ message: "Name and Username are required." });
    }

    // Check if the user already exists by username
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      // Update existing user's profile information
      existingUser.name = name;
      existingUser.mobile = mobile;
      existingUser.comment = comment;

      await existingUser.save(); // Save the updated user profile
      return res.status(200).json({ message: "Profile updated successfully" });
    }

    // If the user does not exist, return 404
    return res.status(404).json({ message: "User not found." });
  } catch (error) {
    console.error("Error creating/updating profile:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
});

// GET: Fetch user profile
router.get("/profile/:username", async (req, res) => {
  const { username } = req.params; // Extract username from URL

  try {
    // Check if the user exists by username
    const user = await User.findOne({ username });

    if (!user) {
      // If the user is not found, send a 404 error
      return res.status(404).json({ message: "User not found" });
    }

    // If user exists, return their profile data
    return res.status(200).json({
      username: user.username,
      name: user.name,
      mobile: user.mobile,
      comment: user.comment
    });
  } catch (error) {
    // Handle any errors that occur during the process
    console.error("Error fetching user profile:", error);
    return res.status(500).json({ message: "Internal server error", error });
  }
});



// User sign-up route
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Check if the email already exists
    const existingUserEmail = await User.findOne({ email });
    if (existingUserEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Validate password length
    if (password.length < 4) {
      return res.status(400).json({ message: "Password must be at least 4 characters long" });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new user
    const newUser = new User({ email, password: hashedPassword ,username});
    await newUser.save();

    // Redirect or send success message
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    console.error("Error during sign-up:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login route using Passport's local strategy
router.post('/logIn', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error" });
    }
    if (!user) {
      return res.status(401).json({ message: "Invalid input" }); // Custom failure message
    }
    
    req.logIn(user, (err) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error" });
      }
      res.status(200).json({
        message: 'Login successful',
        user: req.user, // Send user data as well, if necessary
      });
    });
  })(req, res, next);
});

router.post('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: "Could not log out" });
    }
    res.status(200).json({ message: "Logout successful" });
  });
});

// Protected main route, can only be accessed if authenticated
router.get('/main', ensureAuthenticated, (req, res) => {
  res.send('Welcome to your dashboard!');
});

// Test route without authentication
router.get('/test', (req, res) => {
  res.send('This is a test route. No authentication needed.');
});

module.exports = router;
