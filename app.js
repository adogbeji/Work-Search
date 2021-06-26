require('dotenv').config({path: './config.env'});
const express = require('express');
const ejs = require('ejs');


const app = express();
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/public`));
app.use('/account', express.static(`${__dirname}/public`));


// For Next Time: Require mongoose package & connect to Atlas cluster!


const port = process.env.PORT;

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}...`);
});