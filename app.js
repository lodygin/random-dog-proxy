const express = require('express');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const app = express();

// Router
app.use('/api', require('./routes'));

// Enable cors
app.use(cors({ 'Access-Control-Allow-Origin': '*' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
