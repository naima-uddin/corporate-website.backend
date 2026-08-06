const express = require("express");
const {
  authMiddleware,
  adminMiddleware,
  requireAdminOrModerator,
} = require("../middleware/auth");
const {
  getJobOpportunities,
  getAdminJobOpportunities,
  createJobOpportunity,
  updateJobOpportunity,
  deleteJobOpportunity,
} = require("../controllers/jobOpportunityController");

const router = express.Router();

router.get("/", getJobOpportunities);

router.get("/admin/all", authMiddleware, getAdminJobOpportunities);

router.post("/", authMiddleware, requireAdminOrModerator, createJobOpportunity);

router.put("/:id", authMiddleware, requireAdminOrModerator, updateJobOpportunity);

router.delete("/:id", authMiddleware, adminMiddleware, deleteJobOpportunity);

module.exports = router;
