const mongoose = require('mongoose');
const Food = require('./models/Food');
const uri = 'mongodb+srv://storchak850:26266262@deliziosocluster.xn4bldc.mongodb.net/?retryWrites=true&w=majority&appName=deliziosoCluster'

const foods = [
  {
    title: 'Spaghetti Carbonara',
    price: 12,
    description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
    img: 'url-to-image',
    category: 'Pasta'
  },
  {
    title: 'Margherita Pizza',
    price: 10,
    description: 'Pizza with tomatoes, mozzarella cheese, fresh basil, salt, and extra-virgin olive oil.',
    img: 'url-to-image',
    category: 'Pizza'
  },
  {
    title: 'Lasagna',
    price: 15,
    description: 'Baked Italian dish with layers of pasta, meat, cheese, and tomato sauce.',
    img: 'url-to-image',
    category: 'Pasta'
  },
  // Добавьте больше блюд по аналогии
];

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    return Food.insertMany(foods);
  })
  .then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    mongoose.connection.close();
  });
