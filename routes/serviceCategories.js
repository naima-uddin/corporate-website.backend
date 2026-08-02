const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getServiceCategories,
  createServiceCategory,
  updateServiceCategory,
  deleteServiceCategory,
} = require("../controllers/serviceCategoriesController");

const router = express.Router();

router.get("/", getServiceCategories);
router.post(
  "/",
  authMiddleware,
  requireAdminOrModerator,
  createServiceCategory,
);
router.put(
  "/:name",
  authMiddleware,
  requireAdminOrModerator,
  updateServiceCategory,
);
router.delete("/:name", authMiddleware, adminMiddleware, deleteServiceCategory);

module.exports = router;
