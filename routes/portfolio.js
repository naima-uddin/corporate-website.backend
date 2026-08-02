const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getPortfolios,
  getAdminPortfolios,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} = require("../controllers/portfolioController");

const router = express.Router();

router.get("/", getPortfolios);

router.get("/admin/all", authMiddleware, getAdminPortfolios);

router.post("/", authMiddleware, requireAdminOrModerator, createPortfolio);

router.put("/:id", authMiddleware, requireAdminOrModerator, updatePortfolio);

router.delete("/:id", authMiddleware, adminMiddleware, deletePortfolio);

module.exports = router;
