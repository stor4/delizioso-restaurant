const express = require('express');
const router = express.Router();
const Reservation = require('../models/Reservation');

// Получить свободные даты
const generateDates = (startDate, days) => {
    const dates = [];
    for (let i = 0; i < days; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
};

router.get('/available-dates', async (req, res) => {
    try {
        const allDates = generateDates(new Date(), 30); // Даты на 30 дней вперед
        const bookedDates = await Reservation.find().distinct('date');
        const availableDates = allDates.filter(date => !bookedDates.includes(date));

        res.json(availableDates);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Получить доступные слоты
router.get('/available-slots', async (req, res) => {
  const { date } = req.query;

  if (!date || isNaN(Date.parse(date))) {
    return res.json([]); 
  }

  try {
    const reservedSlots = await Reservation.find({ date }).select('time');
    const allSlots = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

    const availableSlots = allSlots.filter(slot => !reservedSlots.some(res => res.time === slot));

    res.json(availableSlots);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Создать резервирование
router.post('/reserve', async (req, res) => {
  const { date, time, people, customerName, customerPhone } = req.body;

  try {
    const existingReservation = await Reservation.findOne({ date, time });

    if (existingReservation) {
      return res.status(400).json({ error: 'Это время уже занято.' });
    }

    const reservation = new Reservation({
      date,
      time,
      people,
      customerName,
      customerPhone,
    });

    await reservation.save();
    res.status(201).json(reservation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
