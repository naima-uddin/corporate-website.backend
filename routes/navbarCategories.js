const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getNavbarCategories,
  createNavbarCategory,
  updateNavbarCategory,
  deleteNavbarCategory,
} = require("../controllers/navbarCategoriesController");

const router = express.Router();

router.get("/", getNavbarCategories);
router.post("/", authMiddleware, requireAdminOrModerator, createNavbarCategory);
router.put(
  "/:name",
  authMiddleware,
  requireAdminOrModerator,
  updateNavbarCategory,
);
router.delete("/:name", authMiddleware, adminMiddleware, deleteNavbarCategory);

module.exports = router;
