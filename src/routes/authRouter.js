const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/register", authController.register);
router.post("/login", authController.login);
router.post("/logout", authMiddleware, (req, res) => {
  res.status(200).json({ message: `User ${req.user.email} logged out.` });
});

module.exports = router;
