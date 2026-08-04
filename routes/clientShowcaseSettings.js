const express = require("express");
const {
  authMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getClientShowcaseSettings,
  getAdminClientShowcaseSettings,
  updateClientShowcaseSettings,
} = require("../controllers/clientShowcaseSettingsController");

const router = express.Router();

router.get("/", getClientShowcaseSettings);

router.get("/admin", authMiddleware, getAdminClientShowcaseSettings);

router.put(
  "/",
  authMiddleware,
  requireAdminOrModerator,
  updateClientShowcaseSettings,
);

module.exports = router;
