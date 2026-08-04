const express = require("express");
const {
  authMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getContactSettings,
  getAdminContactSettings,
  updateContactSettings,
} = require("../controllers/contactSettingsController");

const router = express.Router();

router.get("/", getContactSettings);

router.get("/admin", authMiddleware, getAdminContactSettings);

router.put("/", authMiddleware, requireAdminOrModerator, updateContactSettings);

module.exports = router;
