const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, () => {
    console.log(`App listening on port ${port}`)
})