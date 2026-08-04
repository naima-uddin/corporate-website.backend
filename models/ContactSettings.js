const mongoose = require("mongoose");

const contactSettingsSchema = new mongoose.Schema(
  {
    eyebrow: { type: String, trim: true, default: "Contact Us" },
    heading: { type: String, trim: true, default: "Connect with" },
    address: {
      type: String,
      trim: true,
      default: "Plot No 470, Road No 06 (Old 29), DOHS Mirpur, Dhaka Division, Bangladesh",
    },
    phone: { type: String, trim: true, default: "+880 1846-937397" },
    email: { type: String, trim: true, default: "info@a2itltd.com" },
    workingHours: {
      type: String,
      trim: true,
      default: "Saturday - Friday: 10AM - 7PM",
    },
    mapLat: { type: Number, default: 23.836236 },
    mapLng: { type: Number, default: 90.358672 },
  },
  { timestamps: true },
);

module.exports = mongoose.model("ContactSettings", contactSettingsSchema);
