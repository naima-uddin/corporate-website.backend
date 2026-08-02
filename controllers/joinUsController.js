const JoinUsCard = require("../models/JoinUsCard");
const JoinUsSettings = require("../models/JoinUsSettings");

const getOrCreateSettings = async () => {
  let settings = await JoinUsSettings.findOne();
  if (!settings) {
    settings = await JoinUsSettings.create({});
  }
  return settings;
};

const getJoinUsSection = async (req, res) => {
  try {
    const [settings, cards] = await Promise.all([
      getOrCreateSettings(),
      JoinUsCard.find({ isActive: true }).sort({ order: 1, createdAt: 1 }),
    ]);

    return res.status(200).json({
      success: true,
      settings,
      count: cards.length,
      cards,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch Join Us section",
      error: error.message,
    });
  }
};

const getAdminJoinUsSection = async (req, res) => {
  try {
    const [settings, cards] = await Promise.all([
      getOrCreateSettings(),
      JoinUsCard.find().sort({ order: 1, createdAt: 1 }),
    ]);

    return res.status(200).json({
      success: true,
      settings,
      count: cards.length,
      cards,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch Join Us section",
      error: error.message,
    });
  }
};

const updateJoinUsSettings = async (req, res) => {
  try {
    const { heading, subtitle, buttonText, buttonLink } = req.body;

    const settings = await getOrCreateSettings();

    if (heading !== undefined) settings.heading = heading;
    if (subtitle !== undefined) settings.subtitle = subtitle;
    if (buttonText !== undefined) settings.buttonText = buttonText;
    if (buttonLink !== undefined) settings.buttonLink = buttonLink;

    await settings.save();

    return res.status(200).json({
      success: true,
      message: "Join Us settings updated successfully",
      settings,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update Join Us settings",
      error: error.message,
    });
  }
};

const createJoinUsCard = async (req, res) => {
  try {
    const { image, publicId, title, link, order } = req.body;

    if (!image) {
      return res.status(400).json({
        success: false,
        message: "Please provide a card image",
      });
    }

    if (!title) {
      return res.status(400).json({
        success: false,
        message: "Please provide a card title",
      });
    }

    const newCard = new JoinUsCard({
      image,
      publicId: publicId || "",
      title,
      link: link || "",
      order: order ?? 0,
    });

    await newCard.save();

    return res.status(201).json({
      success: true,
      message: "Join Us card created successfully",
      card: newCard,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create Join Us card",
      error: error.message,
    });
  }
};

const updateJoinUsCard = async (req, res) => {
  try {
    const { id } = req.params;
    const { image, publicId, title, link, order, isActive } = req.body;

    const card = await JoinUsCard.findById(id);

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Join Us card not found",
      });
    }

    if (image) card.image = image;
    if (publicId !== undefined) card.publicId = publicId;
    if (title !== undefined) card.title = title;
    if (link !== undefined) card.link = link;
    if (order !== undefined) card.order = order;
    if (isActive !== undefined) card.isActive = isActive;

    await card.save();

    return res.status(200).json({
      success: true,
      message: "Join Us card updated successfully",
      card,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update Join Us card",
      error: error.message,
    });
  }
};

const deleteJoinUsCard = async (req, res) => {
  try {
    const { id } = req.params;

    const card = await JoinUsCard.findById(id);

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Join Us card not found",
      });
    }

    await JoinUsCard.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Join Us card deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete Join Us card",
      error: error.message,
    });
  }
};

module.exports = {
  getJoinUsSection,
  getAdminJoinUsSection,
  updateJoinUsSettings,
  createJoinUsCard,
  updateJoinUsCard,
  deleteJoinUsCard,
};
