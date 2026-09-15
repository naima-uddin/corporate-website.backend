const express = require("express");
const {
  authMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getSmartFeatureSettings,
  updateSmartFeatureSettings,
} = require("../controllers/smartFeatureSettingsController");

const router = express.Router();

router.get("/", getSmartFeatureSettings);

router.put(
  "/",
  authMiddleware,
  requireAdminOrModerator,
  updateSmartFeatureSettings,
);

module.exports = router;
