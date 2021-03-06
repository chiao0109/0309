var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  var db = req.con;
  var data = "";

  db.query('SELECT * FROM account', function(err, rows) {
      if (err) {
          console.log(err);
      }
      var data = rows;

      //use index.ejs
      res.render('index', { title: 'Account Information', data: data });
  });
});
// add page
router.get('/add', function(req, res, next) {
  
  //use userAdd.ejs
  res.render('userAdd', { title: 'Add User'});
});

module.exports = router;
