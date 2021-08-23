'use strict';

const express = require('express');
const cors = require('cors');
const axios = require('axios')
require('dotenv').config();
const server = express();
server.use(cors());
server.use(express.json());

const PORT = process.env.PORT || 6000; // I AM USING THIS PORT 
const getDrinksData = require('./controller/drink.controller')
const mongoose = require('mongoose');
const crud = require('./controller/drink.crud.controller')
mongoose.connect('mongodb://localhost:27017/drink',   {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

//http://localhost:6000/drink
server.get('/drink', getDrinksData);


//http://localhost:6000/test
server.get('/test', (req, res) => {
    res.send('SERVER IS WORKING FINE WELCOME TO OUR APPLICATION')
})
/////////////////////////// CRUD /////////////////////////////

//http://localhost:6000/drink/favorite
server.post('/drink/favorite', crud.createFavoriteDrink);

//http://localhost:6000/drink/favorite
server.get('/drink/favorite', crud.getFavoriteDrink)

//http://localhost:6000/drink/favorite/slug
server.delete('/drink/favorite/:slug', crud.deleteFavoriteDrink)

//http://localhost:6000/drink/favorite/slug
server.put('/drink/favorite/:slug',crud.updateFavoriteDrinks )

///////////////////////////////////////////////////////////////
server.listen(PORT ,() => {
    console.log(`I AM LISTENING TO THE ${PORT}`)
});