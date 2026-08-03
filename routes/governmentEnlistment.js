const express = require("express");
const {
  authMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getGovernmentEnlistment,
  getAdminGovernmentEnlistment,
  updateGovernmentEnlistment,
} = require("../controllers/governmentEnlistmentController");

const router = express.Router();

router.get("/", getGovernmentEnlistment);

router.get("/admin", authMiddleware, getAdminGovernmentEnlistment);

router.put(
  "/",
  authMiddleware,
  requireAdminOrModerator,
  updateGovernmentEnlistment,
);

module.exports = router;
