var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '车众帮' });
});

router.get('/shoplist', function(req, res, next) {
  res.render('shoplist', { title: '商品列表' });
});

router.get('/in', function(req, res, next) {
  res.render('introduction', { title: '商品介绍' });
});

router.get('/fa', function(req, res, next) {
  res.render('fa', { title: 'mianzi' });
});

module.exports = router;
