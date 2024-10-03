const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const userRoutes = require("./routes/userRoutes");
require("./middleware/passportConfig"); // Adjust path if necessary
const bodyParser = require("body-parser");

dotenv.config(); // Load environment variables

const app = express(); // Initialize the Express app
const PORT = process.env.PORT || 5000;

// Middleware for parsing JSON
app.use(bodyParser.json());

// CORS middleware
app.use(cors({
  origin: 'http://localhost:3000', // Adjust based on frontend port
  credentials: true, // Required for session-based auth to work
}));

// Middleware for parsing URL-encoded data and JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

// Session management
app.use(
  session({
    secret: "yourSecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: false, // Set to true if using HTTPS
      httpOnly: true,
      sameSite: 'none', // Allow cross-origin cookies
    },
  })
);

// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

// Test route to ensure the server is working
app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

// User Routes (e.g., /api/users/login, /api/users/signup)
app.use("/api/users", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
