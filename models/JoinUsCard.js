const mongoose = require("mongoose");

const joinUsCardSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: [true, "Please provide a card image"],
    },
    publicId: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      required: [true, "Please provide a card title"],
      trim: true,
    },
    link: {
      type: String,
      trim: true,
      default: "",
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model("JoinUsCard", joinUsCardSchema);
