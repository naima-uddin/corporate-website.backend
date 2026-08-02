const express = require("express");
const {
  authMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getFooterSection,
  getAdminFooterSection,
  updateFooter,
} = require("../controllers/footerController");

const router = express.Router();

router.get("/", getFooterSection);

router.get("/admin", authMiddleware, getAdminFooterSection);

router.put("/", authMiddleware, requireAdminOrModerator, updateFooter);

module.exports = router;
