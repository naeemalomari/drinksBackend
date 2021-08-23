'use strict';


const drink = require('../model/drink.mongoose.model')

const createFavoriteDrink = async (req, res) => {
    const { strDrink,
        strDrinkThumb,
        idDrink } = req.body
    const slug = strDrink.toLowerCase().split(' ').join('-');
        drink.find({ strDrink: strDrink }, (error, result) => {
            if (result.length > 0) {
                res.send('data already exists');
            } else {
                const newDrink = new drink({
                    strDrink: strDrink,
                    strDrinkThumb: strDrinkThumb,
                    idDrink: idDrink,
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
    drink.remove({ slug: slug }, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);
        }
    })
}
const updateFavoriteDrinks = async(req, res) => {
    const { strDrink,
        strDrinkThumb,
        idDrink } = req.body
        const slug = req.params.slug;
        drink.find({ slug: slug} , (error, result) => {

            if(error){
                res.send(error);
            }else{
                const updatedData = new drink({
                    strDrink: strDrink,
                    strDrinkThumb: strDrinkThumb,
                    idDrink: idDrink,
                });
                res.send(updatedData);
            }
        })
}
module.exports = {
    createFavoriteDrink,
    getFavoriteDrink,
    deleteFavoriteDrink,
    updateFavoriteDrinks
}

