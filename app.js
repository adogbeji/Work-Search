require('dotenv').config({path: './config.env'});
const express = require('express');
const ejs = require('ejs');
const mongoose = require('mongoose');


const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`));
app.use('/account', express.static(`${__dirname}/public`));


const DB = require('./config/keys').MongoURI;

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(() => {
    console.log('MongoDB Connected!');
})
.catch(err => {
    console.log(err);
});


const User = require('./models/user-model');


// For Next Time: Start adding sequence steps to Home Page Section D!


app.get('/', (req, res) => {
    res.render('home');
});


const port = process.env.PORT;

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}...`);
});