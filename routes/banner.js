const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getBanners,
  getAdminBanners,
  createBanner,
  updateBanner,
  deleteBanner,
} = require("../controllers/bannerController");

const router = express.Router();

router.get("/", getBanners);

router.get("/admin/all", authMiddleware, getAdminBanners);

router.post("/", authMiddleware, requireAdminOrModerator, createBanner);

router.put("/:id", authMiddleware, requireAdminOrModerator, updateBanner);

router.delete("/:id", authMiddleware, adminMiddleware, deleteBanner);

module.exports = router;
