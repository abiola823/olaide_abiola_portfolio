const express = require('express');
const app = express();
const db = require('./config/db')
const userRoute  = require('./routes/userRoute');
require('dotenv').config();
const PORT = process.env.PORT || 3000;
const path = require('path');


db();
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/user', express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');


app.get('/', (req,res) => {
    const person = "hello";
    res.render('pages/home', {persons: person});
});

// app.get('/api/user/contact', (req,res) => {
//     res.render('pages/contact');
// });

app.get('/about', (req,res) => {
    res.render('pages/about');
});






app.use('/api/user', userRoute);
app.listen(PORT, () => console.log(`server running on port ${PORT}`));