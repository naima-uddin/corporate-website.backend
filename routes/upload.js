const express = require("express");
const { authMiddleware } = require("../middleware/auth");
const {
  upload,
  uploadImageByType,
  uploadBlogImage,
  uploadPortfolioImage,
  uploadServiceImage,
  uploadClientLogoImage,
  uploadBannerImage,
  listPortfolioResources,
  listMediaResources,
  deletePortfolioResource,
} = require("../controllers/uploadController");

const router = express.Router();

router.post(
  "/image/:type",
  authMiddleware,
  upload.single("image"),
  uploadImageByType,
);
router.post("/blogs", authMiddleware, upload.single("image"), uploadBlogImage);
router.post(
  "/portfolio",
  authMiddleware,
  upload.single("image"),
  uploadPortfolioImage,
);
router.post(
  "/services",
  authMiddleware,
  upload.single("image"),
  uploadServiceImage,
);
router.post(
  "/clients",
  authMiddleware,
  upload.single("image"),
  uploadClientLogoImage,
);
router.post(
  "/banners",
  authMiddleware,
  upload.single("image"),
  uploadBannerImage,
);
router.get("/portfolio/list", authMiddleware, listPortfolioResources);
router.get("/media/list", authMiddleware, listMediaResources);
router.delete("/portfolio", authMiddleware, deletePortfolioResource);

module.exports = router;
