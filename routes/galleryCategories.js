const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getGalleryCategories,
  createGalleryCategory,
  deleteGalleryCategory,
} = require("../controllers/galleryCategoriesController");

const router = express.Router();

router.get("/", getGalleryCategories);
router.post("/", authMiddleware, requireAdminOrModerator, createGalleryCategory);
router.delete("/:name", authMiddleware, adminMiddleware, deleteGalleryCategory);

module.exports = router;
