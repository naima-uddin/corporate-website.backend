const express = require("express");
const {
  authMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const { getCSR, getAdminCSR, updateCSR } = require("../controllers/csrController");

const router = express.Router();

router.get("/", getCSR);

router.get("/admin", authMiddleware, getAdminCSR);

router.put("/", authMiddleware, requireAdminOrModerator, updateCSR);

module.exports = router;
