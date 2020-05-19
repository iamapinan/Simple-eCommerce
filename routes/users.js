var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController')
var authen = require('../middleware/authenMiddleware')

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/profile', authen.verifyToken, userController.getUser)

/* Authentication */
router.post('/login', authen.loginMiddleware, userController.login)

module.exports = router;