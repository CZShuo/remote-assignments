const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('public'));

app.set('view engine','pug');

const routesMain = require('./routes');
const routesGetData =require('./routes/getData');
app.use(routesMain);
app.use('/getData',routesGetData);


app.listen(3000,()=>{console.log('Running on localhost:3000')});