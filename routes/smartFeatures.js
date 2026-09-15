const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getSmartFeatures,
  getAdminSmartFeatures,
  createSmartFeature,
  updateSmartFeature,
  deleteSmartFeature,
} = require("../controllers/smartFeaturesController");

const router = express.Router();

router.get("/", getSmartFeatures);

router.get("/admin/all", authMiddleware, getAdminSmartFeatures);

router.post("/", authMiddleware, requireAdminOrModerator, createSmartFeature);

router.put("/:id", authMiddleware, requireAdminOrModerator, updateSmartFeature);

router.delete("/:id", authMiddleware, adminMiddleware, deleteSmartFeature);

module.exports = router;
