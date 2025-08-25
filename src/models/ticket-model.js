const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  concertId: { type: mongoose.Schema.Types.ObjectId, ref: "Concert", required: true },
  seatId: { type: mongoose.Schema.Types.ObjectId, required: false },
  seatLabel: { type: String },
  price: { type: Number, required: true },
  currency: { type: String, default: "USD" },
  status: { type: String, enum: ["Available", "Reserved", "Sold"], default: "Available" }
});

const ticketModel = mongoose.model("Ticket", ticketSchema);

module.exports = ticketModel; 