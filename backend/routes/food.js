const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Получить все блюда
router.get('/all', async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Получить блюда по категории
router.get('/category/:category?', async (req, res) => {
    const { category } = req.params;
    
    try {
      const query = category ? { category } : {};
      const foods = await Food.find(query);
      res.json(foods);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Получить часть списка блюд (с пагинацией)
router.get('/part', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  try {
    const foods = await Food.find()
      .skip((page - 1) * limit)
      .limit(limit);
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
