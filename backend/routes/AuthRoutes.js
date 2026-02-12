const express = require("express");
const { login, register, getStaff, deleteStaff, getMe } = require("../controllers/Authcontroller");
const { protect, adminOnly } = require("../middelwares/Auth");
const router = express.Router();


// Public Routes
router.post("/login", login);
router.post("/register", register);
router.get("/me", protect, getMe);

// Protected Routes (Required Token)
// getStaff is used by Settings.jsx to show the team
router.get("/staff", protect, adminOnly, getStaff);

// deleteStaff is used by the Trash icon in Settings.jsx
router.delete("/:id", protect, adminOnly, deleteStaff);

module.exports = router;