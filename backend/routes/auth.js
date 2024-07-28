const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Secret for JWT
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Register route
// router.post('/register', async (req, res) => {
//     const { username, email, password } = req.body;

//     try {
//         // Check if user already exists
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ message: 'User already exists' });
//         }

//         // Hash the password
//         const hashedPassword = await bcrypt.hash(password, 12);
//         const newUser = new User({ username, email, password: hashedPassword });
//         await newUser.save();

//         // Generate a JWT token
//         const token = jwt.sign({ id: newUser._id, username: newUser.username }, JWT_SECRET, { expiresIn: '1h' });

//         // Respond with the token and username
//         res.status(201).json({ token, username: newUser.username });
//     } catch (error) {
//         console.error(error.message);
//         res.status(500).json({ message: 'Server error' });
//     }
// });

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        console.log('Plain password:', password);
        console.log('Hashed password:', hashedPassword);

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id, username: newUser.username }, JWT_SECRET, { expiresIn: '1h' });
        res.status(201).json({ token, username: newUser.username });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Server error' });
    }
});


// Login route
// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Find the user by username
//         const user = await User.findOne({ username });
//         if (!user) {
//             return res.status(400).json({ message: 'Invalid credentials(name)' });
//         }

//         // Compare the password
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             return res.status(400).json({ message: 'Invalid credentials(psw)' });
//         }

//         // Generate a JWT token
//         const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

//         // Set the token as an HTTP-only cookie
//         res.cookie('token', token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production', // Use HTTPS in production
//             sameSite: 'strict', // Protects against CSRF attacks
//         });

//         // Respond with the token and username
//         res.json({ token, username: user.username });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });

// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         // Найти пользователя по имени пользователя
//         const user = await User.findOne({ username });
//         if (!user) {
//             console.log('User not found');
//             return res.status(400).json({ message: 'Invalid credentials (name)' });
//         }

//         // Вывести хранимый пароль для проверки
//         console.log('Stored hashed password:', user.password);

//         // Проверить пароль
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) {
//             console.log('Password does not match');
//             return res.status(400).json({ message: 'Invalid credentials (psw)' });
//         }

//         // Создать JWT
//         const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

//         // Установить токен в виде HTTP-only cookie
//         res.cookie('token', token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production', // использовать HTTPS в продакшене
//             sameSite: 'strict', // Защита от CSRF атак
//         });

//         // Ответить токеном и именем пользователя
//         res.json({ token, username: user.username });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });

// router.post('/login', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         const user = await User.findOne({ username });
//         if (!user) {
//             console.log('User not found');
//             return res.status(400).json({ message: 'Invalid credentials (name)' });
//         }

//         console.log('Stored hashed password:', user.password);

//         const isMatch = await bcrypt.compare(password, user.password);
//         console.log('Password matches:', isMatch);

//         if (!isMatch) {
//             console.log('Password does not match');
//             return res.status(400).json({ message: 'Invalid credentials (psw)' });
//         }

//         const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

//         res.cookie('token', token, {
//             httpOnly: true,
//             secure: process.env.NODE_ENV === 'production',
//             sameSite: 'strict',
//         });

//         res.json({ token, username: user.username });
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).send('Server error');
//     }
// });

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            console.log('User not found');
            return res.status(400).json({ message: 'Invalid credentials (name)' });
        }

        console.log('Input username:', username);
        console.log('Input password:', password);
        console.log('Stored hashed password:', user.password);

        const isMatch = await bcrypt.compare(password, user.password);
        console.log('Password matches:', isMatch);

        if (!isMatch) {
            console.log('Password does not match');
            return res.status(400).json({ message: 'Invalid credentials (psw)' });
        }

        const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        res.json({ token, username: user.username });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
