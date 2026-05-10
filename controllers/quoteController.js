const Quote = require("../models/quote");

const createQuote = async (req, res) => {
  try {
    const { name, email, phone, serviceRequired, budget, message } = req.body;

    if (!name || !email || !phone || !serviceRequired || !budget || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const quote = await Quote.create({
      name,
      email,
      phone,
      serviceRequired,
      budget,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Quote request submitted",
      data: quote,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  createQuote,
};
