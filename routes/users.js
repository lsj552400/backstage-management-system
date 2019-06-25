var express = require('express');
var router = express.Router();
var userController = require('../controller/users')

router.get('/add',userController.add);
router.get('/login',userController.login);

module.exports = router;
