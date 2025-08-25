const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  section: String,
  row: String,
  seatNumber: Number,
  seatType: { type: String, enum: ["Regular", "VIP", "VVIP", "Balcony"] },
});

const venueSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  capacity: Number,
  seats: [seatSchema],
});

const venueModel = mongoose.model("Venue", venueSchema);

module.exports = venueModel;
