var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', userController.getUser)

/* Authentication */
router.post('/login', userController.login)

module.exports = router;