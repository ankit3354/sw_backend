const Newsletter = require("../models/newsletter");

const subscribeNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    /* Validation */

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    /* Email Format */

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    /* Check Existing */

    const exists = await Newsletter.findOne({
      email,
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "You are already subscribed",
      });
    }

    /* Save */

    await Newsletter.create({
      email,
    });

    res.status(201).json({
      success: true,
      message: "Subscribed successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  subscribeNewsletter,
};
