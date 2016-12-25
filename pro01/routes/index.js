var express = require('express');
var router = express.Router();
var users = require('../controller/users_controller.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', users.signup);
module.exports = router;
