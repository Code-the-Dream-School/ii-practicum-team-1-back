const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMiddleware = require("../middleware/authMiddleware");
const { loginLimiter, registerLimiter } = require("../middleware/rateLimiter");

router.post("/register",registerLimiter,  authController.register);
router.post("/login", loginLimiter, authController.login);
router.get("/verify-email", authController.verifyEmail);
router.post("/logout", authMiddleware, (req, res) => {
  res.status(200).json({ message: `User ${req.user.email} logged out.` });
});

router.post("/request-password-reset", authController.requestPasswordReset);
router.post("/reset-password", authController.resetPassword);

module.exports = router;
