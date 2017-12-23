var express = require('express');
var router = express.Router();

/* GET home page. */
var TopBar = {
  project_name:'PIXSELL AD Store',
  searchShow:'none',
  notificationShow:'none',
  taskShow:'none',
}
var LeftSlideBar = {
  user : 'none'
}

router.get('/', function(req, res, next) {
  res.render('home',{title:'PIXSELL AD Store',TopBar:TopBar,LeftSlideBar:LeftSlideBar});
});

module.exports = router;
