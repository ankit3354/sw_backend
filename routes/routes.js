const express = require("express");
const { createContact } = require("../controllers/contactController");
const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");
const { subscribeNewsletter } = require("../controllers/newsletterController");
const { createQuote } = require("../controllers/quoteController");
const protect = require("../middleware/authMiddleware");
const {
  getContacts,
  deleteContact,
  getUsers,
  getQuotes,
} = require("../controllers/adminController");
const adminProtect = require("../middleware/adminMiddleware");

const router = express.Router();

router.post("/contact", createContact);
router.post("/auth/register", registerUser);

router.post("/auth/login", loginUser);

router.get("/auth/profile", protect, getProfile);

router.post("/newsletter/subscribe", subscribeNewsletter);

router.post("/quote", createQuote);

// Admin
router.get("/admin/contacts", protect, adminProtect, getContacts);

router.delete("/admin/contacts/:id", protect, adminProtect, deleteContact);

router.get("/admin/users", protect, adminProtect, getUsers);

router.get("/admin/quotes", protect, adminProtect, getQuotes);

module.exports = router;
