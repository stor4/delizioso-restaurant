const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');  // Добавьте этот импорт
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');

const app = express();
const PORT = process.env.PORT || 5000;
const allowedOrigins = ['http://localhost:5173'];

// Middleware
app.use(cors({
  origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
          callback(null, true);
      } else {
          callback(new Error('Not allowed by CORS'));
      }
  },
  credentials: true // This is important.
}));
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

// Пример защищенного маршрута
app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: 'Доступ разрешен', user: req.user });
});

// Подключение к MongoDB
mongoose.connect('mongodb://localhost:27017/delizioso', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Подключено к MongoDB');
    app.listen(PORT, () => {
        console.log(`Сервер запущен на порту ${PORT}`);
    });
}).catch((err) => {
    console.error(err);
});
