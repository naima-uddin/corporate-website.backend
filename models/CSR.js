const mongoose = require("mongoose");

const csrItemSchema = new mongoose.Schema(
  {
    title: { type: String, trim: true, default: "" },
    description: { type: String, trim: true, default: "" },
    image: { type: String, default: "" },
    imagePublicId: { type: String, default: "" },
    date: { type: String, trim: true, default: "" },
  },
  { _id: false },
);

const csrSchema = new mongoose.Schema(
  {
    label: { type: String, trim: true, default: "Giving Back" },
    heading: {
      type: String,
      trim: true,
      default: "Corporate Social Responsibility",
    },
    description: {
      type: String,
      trim: true,
      default:
        "We believe in creating a positive impact beyond our business — supporting communities, education and sustainable initiatives.",
    },
    items: {
      type: [csrItemSchema],
      default: () => [],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("CSR", csrSchema);
