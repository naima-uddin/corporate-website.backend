const mongoose = require("mongoose");

const siteSettingsSchema = new mongoose.Schema(
  {
    siteName: { type: String, trim: true, default: "A2IT Ltd" },
    logoImage: { type: String, default: "" },
    logoPublicId: { type: String, default: "" },
  },
  { timestamps: true },
);

module.exports = mongoose.model("SiteSettings", siteSettingsSchema);
