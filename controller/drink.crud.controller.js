'use strict';


const drink = require('../model/drink.mongoose.model')

const createFavoriteDrink = async (req, res) => {
    const {
        strDrink,
        strDrinkThumb,
        idDrink } = req.body
    const slug = strDrink.toLowerCase().split(' ').join('-');
    drink.find({ strDrink: strDrink }, (error, data) => {
        if (data.length > 0) {
            res.send('data already exists');
        } else {
            const newDrink = new drink({
                strDrink: strDrink,
                slug: slug,
                strDrinkThumb: strDrinkThumb,
                idDrink: idDrink
            });
            newDrink.save();
            res.send(newDrink);
        }
    })
};
const getFavoriteDrink = async (req, res) => {
    drink.find({}, (error, result) => {
        res.send(result);
    });
}
const deleteFavoriteDrink = async (req, res) => {
    const slug = req.params.slug;
    drink.deleteOne({ slug: slug }, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    })
}
const updateFavoriteDrinks = async (req, res) => {
    const id = req.params.slug;
    console.log(id);
    console.log(req.body)
    const { strDrink} = req.body
    drink.findOneAndUpdate({ _id: id  },{strDrink: strDrink}, (error, data) => {
    res.send(data);
    })
}
module.exports = {
    createFavoriteDrink,
    getFavoriteDrink,
    deleteFavoriteDrink,
    updateFavoriteDrinks
}

