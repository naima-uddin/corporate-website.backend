const express = require("express");
const {
  authMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getSpotlight,
  getAdminSpotlight,
  updateSpotlight,
} = require("../controllers/spotlightController");

const router = express.Router();

router.get("/", getSpotlight);

router.get("/admin", authMiddleware, getAdminSpotlight);

router.put("/", authMiddleware, requireAdminOrModerator, updateSpotlight);

module.exports = router;
