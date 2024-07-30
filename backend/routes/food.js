const express = require('express');
const router = express.Router();
const Food = require('../models/Food');

// Получить все блюда
router.get('/all', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const category = req.query.category || '';

  try {
    const skip = (page - 1) * limit;
    const query = category ? { category } : {};

    const foods = await Food.find(query).skip(skip).limit(limit);
    const total = await Food.countDocuments(query);

    res.json({
      foods,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
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
