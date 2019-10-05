console.log('server.js');

const express = require('express');
const connectDB = require('./config/db');

const app = express();

connectDB();

// Init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('MERN Social App API'));

// Define routes

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));