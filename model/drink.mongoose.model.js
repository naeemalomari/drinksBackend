'use strict';

const mongoose = require('mongoose');

const drinksSchema = new mongoose.Schema({
    // email:{
    //     type: String,
    //     unique: true,
    //     lowercase:true,
    //     trim:true,
    // },
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

const favDrinkModel =mongoose.model('khaledDrinks', drinksSchema)
module.exports = favDrinkModel;
