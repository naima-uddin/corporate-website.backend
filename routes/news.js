const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getNews,
  getNewsBySlug,
  getAdminNews,
  getAdminNewsById,
  createNews,
  updateNews,
  deleteNews,
} = require("../controllers/newsController");

const router = express.Router();

router.get("/", getNews);

router.get("/admin/all", authMiddleware, getAdminNews);
router.get("/admin/:id", authMiddleware, getAdminNewsById);

router.post("/", authMiddleware, requireAdminOrModerator, createNews);

router.put("/:id", authMiddleware, requireAdminOrModerator, updateNews);

router.delete("/:id", authMiddleware, adminMiddleware, deleteNews);

router.get("/:slug", getNewsBySlug);

module.exports = router;
