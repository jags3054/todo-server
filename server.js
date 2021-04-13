const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./db/conn');
app.use(require('./router/auth'));


//port 
app.listen(5000, () => {
    console.log('listning on port no 5000..');
});