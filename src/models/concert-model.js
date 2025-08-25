const mongoose = require("mongoose");

const concertSchema = new mongoose.Schema({
  venueId: { type: mongoose.Schema.Types.ObjectId, ref: "Venue", required: true },
  artist: { type: String, required: true },
  title: String,
  concertDate: { type: Date, required: true }
});

const concertModel = mongoose.model("Concert", concertSchema);

module.exports = concertModel;