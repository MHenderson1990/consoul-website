const express = require('express');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');

let app = express();

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);

let PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));