const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getJoinUsSection,
  getAdminJoinUsSection,
  updateJoinUsSettings,
  createJoinUsCard,
  updateJoinUsCard,
  deleteJoinUsCard,
} = require("../controllers/joinUsController");

const router = express.Router();

router.get("/", getJoinUsSection);

router.get("/admin/all", authMiddleware, getAdminJoinUsSection);

router.put(
  "/settings",
  authMiddleware,
  requireAdminOrModerator,
  updateJoinUsSettings,
);

router.post("/cards", authMiddleware, requireAdminOrModerator, createJoinUsCard);

router.put(
  "/cards/:id",
  authMiddleware,
  requireAdminOrModerator,
  updateJoinUsCard,
);

router.delete("/cards/:id", authMiddleware, adminMiddleware, deleteJoinUsCard);

module.exports = router;
