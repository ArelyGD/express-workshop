const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;
const NAME = "Arely García Durán";

app.get('/', (req, res) => {
    res.send(`Hello World from Port ${PORT}`);
});

app.get('/myname', (req, res) => {
    res.send(`Hello World! My name is ${NAME}.`);
});

app.listen(PORT, () => {
    console.info(`Server is running on port ${PORT}`);
});
