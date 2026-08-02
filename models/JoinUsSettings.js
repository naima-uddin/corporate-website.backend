const mongoose = require("mongoose");

const joinUsSettingsSchema = new mongoose.Schema(
  {
    heading: {
      type: String,
      trim: true,
      default: "Join Us",
    },
    subtitle: {
      type: String,
      trim: true,
      default: "",
    },
    buttonText: {
      type: String,
      trim: true,
      default: "Know More",
    },
    buttonLink: {
      type: String,
      trim: true,
      default: "",
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("JoinUsSettings", joinUsSettingsSchema);
