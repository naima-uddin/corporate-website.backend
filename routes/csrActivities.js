const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getCSRActivities,
  getCSRActivityBySlug,
  getAdminCSRActivities,
  getAdminCSRActivityById,
  createCSRActivity,
  updateCSRActivity,
  deleteCSRActivity,
} = require("../controllers/csrActivityController");

const router = express.Router();

router.get("/", getCSRActivities);

router.get("/admin/all", authMiddleware, getAdminCSRActivities);
router.get("/admin/:id", authMiddleware, getAdminCSRActivityById);

router.post("/", authMiddleware, requireAdminOrModerator, createCSRActivity);

router.put("/:id", authMiddleware, requireAdminOrModerator, updateCSRActivity);

router.delete("/:id", authMiddleware, adminMiddleware, deleteCSRActivity);

router.get("/:slug", getCSRActivityBySlug);

module.exports = router;
