const shopModel = require("../model/shop")
const findshop = function(req, res, next) {
    shopModel.shopFind(function(data){
        res.json(data);
    });
}

module.exports = {
    findshop
}
