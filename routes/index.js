var express = require('express');
var router = express.Router();

/* GET home page. */

//app.use('/webSiteOwner',require('webSiteOwner'));

router.use('/webSiteOwner',require('./webSiteOwner'));
router.use('/adClient',require('./adClient'));

router.get('/', function(req, res, next) {
  var TopBar = {
    project_name:'PIXSELL AD Store',
    searchShow:'none',
    notificationShow:'none',
    taskShow:'none',
  }
  var LeftSlideBar = {
    user : 'none'
  }
  res.render('home',{title:'PIXSELL AD Store',TopBar:TopBar,LeftSlideBar:LeftSlideBar});
});

module.exports = router;
