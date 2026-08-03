const express = require("express");
const {
  authMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getAboutPage,
  getAdminAboutPage,
  updateAboutPage,
} = require("../controllers/aboutController");

const router = express.Router();

router.get("/", getAboutPage);

router.get("/admin", authMiddleware, getAdminAboutPage);

router.put("/", authMiddleware, requireAdminOrModerator, updateAboutPage);

module.exports = router;
