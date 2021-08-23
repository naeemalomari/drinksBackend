'use strict';

const mongoose = require('mongoose');


const drinksSchema = mongoose.Schema({
    strDrink:{
        type: String,
        unique: true,
        lowercase:true,
        trim:true,
    },
    slug:{
        type: String,
        unique: true,
        lowercase:true,
        trim:true,
    },
    strDrinkThumb:String,
    idDrink:String,
});

const favDrinkModel =mongoose.model('drinks', drinksSchema)
module.exports = favDrinkModel;
