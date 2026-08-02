const express = require("express");
const {
  authMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getJoinUs,
  getAdminJoinUs,
  updateJoinUs,
} = require("../controllers/joinUsController");

const router = express.Router();

router.get("/", getJoinUs);

router.get("/admin", authMiddleware, getAdminJoinUs);

router.put("/", authMiddleware, requireAdminOrModerator, updateJoinUs);

module.exports = router;
