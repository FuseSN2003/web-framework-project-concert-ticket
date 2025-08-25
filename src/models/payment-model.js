const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  reservationId: { type: mongoose.Schema.Types.ObjectId, ref: "Reservation", required: true },
  amount: { type: Number, required: true },
  paymentMethod: { type: String, enum: ["CreditCard", "PayPal", "BankTransfer"], required: true },
  paymentDate: { type: Date, default: Date.now },
  status: { type: String, enum: ["Success", "Failed", "Refunded"], default: "Success" }
});

const paymentModel = mongoose.model("Payment", paymentSchema);

module.exports = paymentModel;
