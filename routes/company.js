const express = require('express')
const router = express.Router()
const companyController = require('../controllers/companyController');
const CheckAdmin = require('../middleware/checkAdmin');
const passportJWT = require('../middleware/passportJWT');


router.get('/', [passportJWT.isLogin, CheckAdmin.isAdmin], companyController.company)
router.delete('/:id', companyController.destroy)
router.put('/:id', companyController.update)
router.post('/', companyController.insert)
router.get('/:id', companyController.show)
module.exports = router