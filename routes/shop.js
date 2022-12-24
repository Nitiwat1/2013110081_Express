var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')

/* GET home page. */
router.get('/', shopController.Shop);
router.get('/menu', shopController.menu);

module.exports = router;