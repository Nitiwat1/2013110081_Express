var express = require('express');
var router = express.Router();
const shopController = require('../controllers/shopController')
const { body } = require('express-validator');


/* GET home page. */
router.get('/', shopController.Shop);
router.get('/menu', shopController.menu);
router.get('/:id', shopController.show);
router.post('/', [
    body("name").not().isEmpty().withMessage("กรุณาใส่ชื่อร้านด้วย"),
    body("location.lat")
        .not()
        .isEmpty()
        .withMessage("กรุณาใส่ Lat ด้วย"),

    body("location.lgn")
        .not()
        .isEmpty()
        .withMessage("กรุณาใส่ Lgn ด้วย"),

    body('photo').not().isEmpty().withMessage('กรุณาใส่รูปด้วย')

], shopController.insert);

module.exports = router;