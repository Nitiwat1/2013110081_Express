var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Hello kitty');
  res.status(200).json({
    fullname:'Nitiwat Phomemarasee'
  })
});

router.get('/bio', function(req, res, next) {
  // res.send('Hello kitty');
  res.status(200).json({
    fullname:'Nitiwat Phomemarasee',
    nickname:'Boss',
    hobby:'sleep',
    gitusername:'nitiwat1'
  })
});

module.exports = router;
