const express = require('express');
const app = express();
const path = require('path');

const exphbs = require ('express-handlebars');
const exp = require('constants')

const HTTP_PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.engine('.hbs', exphbs.engine({ extname: '.hbs' }));

app.set('view engine', '.hbs');

// GET route index

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(HTTP_PORT, () => {
    console.log(`Server is running on port ${HTTP_PORT}`);
});
