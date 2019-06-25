var express = require('express');

var router = express.Router();

var shopController = require('../controller/shop');
var findshopController = require("../controller/findshop");
var removeshopController = require("../controller/removeShop");
var updatashopController = require("../controller/updataShop");

router.post('/',shopController.cpUpload,shopController.addshop);

router.get('/find',findshopController.findshop);

router.get('/remove',removeshopController.removeshop);

router.post('/updata',updatashopController.cpUpload,updatashopController.updatashop);

module.exports = router;
