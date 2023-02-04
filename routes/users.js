var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/userControllers')
const { body } = require('express-validator');
const passport = require('../middleware/passportJWT')

/* GET users listing. */
router.get('/', userControllers.index)

router.get('/bio', userControllers.bio)

router.get('/me', [passport.isLogin], userControllers.profile)

router.post('/', [
    body('name').not().isEmpty().withMessage('กรุณาป้อนชื่อสกุลด้วย'),
    body('email').not().isEmpty().withMessage('กรุณาป้อนอีเมลด้วย').isEmail().
        withMessage('รูปแบบอีเมลไม่ถูกต้อง'),
    body('password').not().isEmpty().withMessage('กรุณากรอกรหัสผ่านด้วย').isLength({ min: 5 }).withMessage('รหัสผ่านต้อง 5 ตัวอักษรขึ้นไป')
], userControllers.register)

router.post('/login', [
    body('email').not().isEmpty().withMessage('กรุณาป้อนอีเมลด้วย').isEmail().
        withMessage('รูปแบบอีเมลไม่ถูกต้อง'),
    body('password').not().isEmpty().withMessage('กรุณากรอกรหัสผ่านด้วย').isLength({ min: 5 }).withMessage('รหัสผ่านต้อง 5 ตัวอักษรขึ้นไป')
], userControllers.login)

module.exports = router;
