const express = require("express");
const {
  authMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getSiteSettings,
  getAdminSiteSettings,
  updateSiteSettings,
} = require("../controllers/siteSettingsController");

const router = express.Router();

router.get("/", getSiteSettings);

router.get("/admin", authMiddleware, getAdminSiteSettings);

router.put("/", authMiddleware, requireAdminOrModerator, updateSiteSettings);

module.exports = router;
