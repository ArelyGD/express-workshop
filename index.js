const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`Hola mundo from Port ${port}`);
});

app.listen(port, () => {
    console.info(`Server is running on port ${port}`);
});