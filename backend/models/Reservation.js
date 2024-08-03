const mongoose = require('mongoose');

const ReservationSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  people: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  customerPhone: {
    type: String,
    required: true,
  },
});

const Reservation = mongoose.model('Reservation', ReservationSchema);
module.exports = Reservation;
