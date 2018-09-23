const express = require('express');
const mongoose = require('./dbConnection/connection');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();

app.use(cors());
app.use(bodyParser.json());


const routes = require('./routes/route');
app.use('/api', routes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})