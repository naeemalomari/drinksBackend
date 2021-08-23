'use strict';

const express = require('express');
const cors = require('cors');
const axios = require('axios')
require('dotenv').config();
const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 3050; // I AM USING THIS PORT 
const getDrinksData = require('./controller/drink.controller')

const crud = require('./controller/drink.crud.controller');


const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/drinks',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

//http://localhost:3050/drink
server.get('/drink', getDrinksData);


//http://localhost:3050/test
server.get('/test', (req, res) => {
    res.send('SERVER IS WORKING FINE WELCOME TO OUR APPLICATION')
})
/////////////////////////// CRUD /////////////////////////////

//http://localhost:3050/drink/favorite
server.post('/drink/favorite', crud.createFavoriteDrink);

//http://localhost:3050/drink/favorite
server.get('/drink/favorite', crud.getFavoriteDrink)

//http://localhost:3050/drink/favorite/:slug
server.delete('/drink/favorite/:slug', crud.deleteFavoriteDrink);

//http://localhost:3050/drink/favorite/:slug
server.put('/drink/favorite/:slug',crud.updateFavoriteDrinks );

///////////////////////////////////////////////////////////////
server.listen(PORT ,() => {
    console.log(`I AM LISTENING TO THE ${PORT}`)
});