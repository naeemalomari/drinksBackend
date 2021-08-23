'use strict';

const axios = require('axios')
const drinkModel = require('../model/drink.model')

const getDrinksData = async (req, res) => {
    console.log(req)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic&fbclid=IwAR0vZN_3VvW-PCCs1g0HCn3zJBuo0nOO0G5xElpGFCr4Xg9iycujIC6L0Bg`
    axios.get(url)
        .then(result => {
            const drinkData = result.data.drinks.map(sam => {
                return new drinkModel(sam);
            })
            res.send(drinkData);
        }).catch(err => {

            console.log(err)

        })
}
module.exports = getDrinksData;
