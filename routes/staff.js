const express = require('express')
const router = express.Router()
const staffController = require('../controllers/staffController')
const { body } = require('express-validator');


router.get('/', staffController.index)

/* http://localhost:3000/staff/63942d89bf53fc309c987962 */

router.get('/:id', staffController.show)
router.delete('/:id', staffController.destroy)
router.put('/:id', staffController.update)

router.post('/',[
    body('name').not().isEmpty().withMessage('กรุณาป้อนชื่อสกุลด้วย'),
    body('salary').not().isEmpty().withMessage('กรุณาป้อนเงินเดือนด้วย'),
    body('photo').not().isEmpty().withMessage('กรุณาใส่รูปด้วย')

], staffController.insert)

module.exports = router