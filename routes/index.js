var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST home page. */
router.post('/', function(req, res, next) {
  res.send("test post response");
});

/* /test req*/
router.get('/test', function(req, res, next) {
  res.send("test response");
});

module.exports = router;
