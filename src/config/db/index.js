const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/f8_education_dev");
    console.log("Connect DB successfully!!");
  } catch (error) {
    console.log("Connect DB failed!!");
  }
}

module.exports = { connect };
