const mongoose = require("../utils/databass").mongoose;
const Shop =  mongoose.model("shop",{
    shopTitle : String,
    shopPrice : String,
    shopText : String,
    shopInputFile:String
  })

const shopFind = function(cb){
    Shop.find().then(function(result){
        cb(result);
    })
}

const shopSave = function(shopInfo,cb){
    let shop = new Shop(shopInfo);
    shop.save().then(function(result){
        cb(result)
    })
}

const removeshop = function(shopInfo,cb) {
    Shop.remove(shopInfo).then(function(result){
        cb(result);
    });
}

const updatashop = function(shopin,shopInfo,cb) {
    Shop.update(shopin,{$set:shopInfo}).then(function(result){
        cb(result);
    });
}


module.exports = {
    shopFind,
    shopSave,
    removeshop,
    updatashop
}