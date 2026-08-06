const express = require("express");
const {
  authMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getLegalPage,
  getAdminLegalPage,
  updateLegalPage,
} = require("../controllers/legalPageController");

const router = express.Router();

router.get("/", getLegalPage);

router.get("/admin", authMiddleware, getAdminLegalPage);

router.put("/", authMiddleware, requireAdminOrModerator, updateLegalPage);

module.exports = router;
