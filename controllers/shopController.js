const Shop = require("../models/shop");
const Menu = require("../models/menu");
const Config = require("../config/index")

exports.Shop = async (req, res, next) => {
    const shops = await Shop.find().select('name photo location').sort({ _id: -1 });


    const shopWithPhotoDomain = await shops.map((shop, index) => {
        return {
            id: shop._id,
            name: shop.name,
            photo: Config.DOMAIN + Config.PORT + '/imges/' + shop.photo,
            location: shop.location
        }
    })


};
exports.menu = async (req, res, next) => {
    // const menu = await Menu.find().select('+name -price')
    // const menu = await Menu.find().where('price').gt(150)
    const menu = await Menu.find().populate('shop')

    res.status(200).json({
        data: menu,
    })
}
exports.show = async (req, res, next) => {
    const shops = await Shop.findById(req.params.id).populate("menu");

    res.status(200).json({
        data: shops,
    });
};