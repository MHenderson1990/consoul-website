const express = require('express');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');

let app = express();

app.use(cors({
  origin: [
    'http://localhost:5173',
    'https://consoulstudios.com',
    'https://www.consoulstudios.com',
  ],
}));
app.use(express.json());

app.use('/pages/contact', contactRoutes);

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));