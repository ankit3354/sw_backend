require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

mongoose.connect(process.env.MONGO_URI);

const seedAdmin = async () => {
  try {
    const adminExists = await User.findOne({
      email: "admin@swtech.com",
    });

    if (adminExists) {
      console.log("Admin already exists");
      process.exit();
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash("admin123", salt);

    await User.create({
      name: "Admin",
      email: "admin@swtech.com",
      password: hashedPassword,
      isAdmin: true,
    });

    console.log("Admin Created");

    process.exit();
  } catch (error) {
    console.log(error);

    process.exit();
  }
};

seedAdmin();
