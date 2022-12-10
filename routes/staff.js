const express = require('express')
const router = express.Router()
const staffController = require('../controllers/staffController')

router.get('/', staffController.index)

/* http://localhost:3000/staff/63942d89bf53fc309c987962 */

router.get('/:id', staffController.show)
router.delete('/:id', staffController.destroy)
router.put('/:id', staffController.update)

router.post('/', staffController.insert)

module.exports = router