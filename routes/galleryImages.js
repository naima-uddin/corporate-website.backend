const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getGalleryImages,
  getAdminGalleryImages,
  createGalleryImage,
  updateGalleryImage,
  deleteGalleryImage,
} = require("../controllers/galleryImagesController");

const router = express.Router();

router.get("/", getGalleryImages);

router.get("/admin/all", authMiddleware, getAdminGalleryImages);

router.post("/", authMiddleware, requireAdminOrModerator, createGalleryImage);

router.put(
  "/:id",
  authMiddleware,
  requireAdminOrModerator,
  updateGalleryImage,
);

router.delete("/:id", authMiddleware, adminMiddleware, deleteGalleryImage);

module.exports = router;
