const Contact = require("../models/contact");
const User = require("../models/user");
const Quote = require("../models/quote");

/* Contacts */
const getContacts = async (req, res) => {
  const contacts = await Contact.find().sort({ createdAt: -1 });

  res.json({
    success: true,
    contacts,
  });
};

/* Delete Contact */
const deleteContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);

  if (!contact) {
    return res.status(404).json({
      success: false,
      message: "Contact not found",
    });
  }
  await contact.deleteOne();
  res.json({
    success: true,
    message: "Contact deleted",
  });
};

/* Users */
const getUsers = async (req, res) => {
  const users = await User.find().select("-password").sort({ createdAt: -1 });

  res.json({
    success: true,
    users,
  });
};

/* Quotes */
const getQuotes = async (req, res) => {
  const quotes = await Quote.find().sort({ createdAt: -1 });

  res.json({
    success: true,
    quotes,
  });
};

module.exports = {
  getContacts,
  deleteContact,
  getUsers,
  getQuotes,
};
