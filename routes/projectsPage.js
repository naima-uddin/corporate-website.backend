const express = require("express");
const {
  authMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getProjectsPage,
  getAdminProjectsPage,
  updateProjectsPage,
} = require("../controllers/projectsPageController");

const router = express.Router();

router.get("/", getProjectsPage);

router.get("/admin", authMiddleware, getAdminProjectsPage);

router.put("/", authMiddleware, requireAdminOrModerator, updateProjectsPage);

module.exports = router;
