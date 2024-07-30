const mongoose = require('mongoose');
const Food = require('./models/Food');
const uri = 'mongodb+srv://storchak850:26266262@deliziosocluster.xn4bldc.mongodb.net/?retryWrites=true&w=majority&appName=deliziosoCluster'

const foods = [

  { title: 'Penne Arrabbiata', price: 10, description: 'Spicy penne pasta with a rich tomato sauce and chili peppers.', img: 'penne_arrabbiata.jpg', category: 'Pasta' },
  { title: 'Fettuccine Alfredo', price: 13, description: 'Fettuccine pasta in a creamy Alfredo sauce with parmesan and garlic.', img: 'fettuccine_alfredo.jpg', category: 'Pasta' },
  { title: 'Pesto Genovese', price: 11, description: 'Pasta with a fresh basil pesto sauce, pine nuts, and parmesan.', img: 'pesto_genovese.jpg', category: 'Pasta' },

  { title: 'Pepperoni', price: 11, description: 'Pizza topped with tomato sauce, mozzarella, and spicy pepperoni slices.', img: 'pepperoni.jpg', category: 'Pizza' },
  { title: 'Four Seasons', price: 14, description: 'Pizza divided into four sections, each with different toppings.', img: 'four_seasons.jpg', category: 'Pizza' },
  { title: 'Quattro Formaggi', price: 13, description: 'Pizza with a blend of four cheeses: mozzarella, gorgonzola, parmesan, and fontina.', img: 'quattro_formaggi.jpg', category: 'Pizza' },
  { title: 'Vegetarian', price: 12, description: 'Pizza with tomato sauce, mozzarella, and a variety of fresh vegetables.', img: 'vegetarian.jpg', category: 'Pizza' },

  { title: 'Gelato', price: 5, description: 'Italian ice cream available in various flavors.', img: 'gelato.jpg', category: 'Dessert' },
  { title: 'Sfogliatelle', price: 7, description: 'Crispy pastry filled with sweet ricotta and candied fruit.', img: 'sfogliatelle.jpg', category: 'Dessert' },

  { title: 'Aperol Spritz', price: 8, description: 'Refreshing cocktail made with Aperol, prosecco, and soda water.', img: 'aperol_spritz.jpg', category: 'Drinks' },
  { title: 'Negroni', price: 9, description: 'Classic cocktail with gin, vermouth, and Campari.', img: 'negroni.jpg', category: 'Drinks' },

  // Antipasti
  { title: 'Bruschetta', price: 7, description: 'Grilled bread topped with fresh tomatoes, garlic, and basil.', img: 'bruschetta.jpg', category: 'Antipasti' },
  { title: 'Caprese Salad', price: 8, description: 'Fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.', img: 'caprese_salad.jpg', category: 'Antipasti' },
  { title: 'Arancini', price: 9, description: 'Fried rice balls stuffed with cheese and meat sauce.', img: 'arancini.jpg', category: 'Antipasti' },
  { title: 'Antipasto Platter', price: 15, description: 'Assorted cured meats, cheeses, olives, and marinated vegetables.', img: 'antipasto_platter.jpg', category: 'Antipasti' },
  { title: 'Stuffed Mushrooms', price: 10, description: 'Mushrooms filled with a mixture of cheese, garlic, and herbs.', img: 'stuffed_mushrooms.jpg', category: 'Antipasti' },

  // Salads
  { title: 'Caesar Salad', price: 9, description: 'Romaine lettuce, croutons, and parmesan tossed in Caesar dressing.', img: 'caesar_salad.jpg', category: 'Salad' },
  { title: 'Greek Salad', price: 8, description: 'Tomatoes, cucumbers, olives, and feta cheese in a light dressing.', img: 'greek_salad.jpg', category: 'Salad' },
  { title: 'Insalata Mista', price: 7, description: 'Mixed greens with tomatoes, cucumbers, and a balsamic vinaigrette.', img: 'insalata_mista.jpg', category: 'Salad' },
  { title: 'Tuna Salad', price: 10, description: 'Mixed greens with seared tuna, olives, and a lemon vinaigrette.', img: 'tuna_salad.jpg', category: 'Salad' },
  { title: 'Beet Salad', price: 8, description: 'Roasted beets with goat cheese and arugula in a balsamic glaze.', img: 'beet_salad.jpg', category: 'Salad' },

  // Seafood
  { title: 'Shrimp Scampi', price: 18, description: 'Shrimp sautéed in garlic, lemon, and white wine, served with pasta.', img: 'shrimp_scampi.jpg', category: 'Seafood' },
  { title: 'Grilled Octopus', price: 20, description: 'Tender octopus with lemon and olive oil.', img: 'grilled_octopus.jpg', category: 'Seafood' },
  { title: 'Seafood Risotto', price: 22, description: 'Creamy risotto with a mix of seafood.', img: 'seafood_risotto.jpg', category: 'Seafood' },
  { title: 'Lobster Tail', price: 25, description: 'Grilled lobster tail with garlic butter.', img: 'lobster_tail.jpg', category: 'Seafood' },
  { title: 'Fried Calamari', price: 14, description: 'Lightly battered and fried calamari served with marinara sauce.', img: 'fried_calamari.jpg', category: 'Seafood' },
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
