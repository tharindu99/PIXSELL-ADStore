var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var authController = require('../controllers/authcontrollers');

router.get('/', function(req, res, next) {
  var TopBar = {
    project_name:'PIXSELL AD Store',
    searchShow:'none',
    notificationShow:'none',
    taskShow:'none',
  }
  var LeftSlideBar = {
      user : 'block',
      user_info:req.user
  }
 // console.log(req.user);
  res.render('webSiteOwner',{title:'PIXSELL AD Store',TopBar:TopBar,LeftSlideBar:LeftSlideBar});
});

router
  .get('/login',authController.siteOwner_signin)
  .post('/login',passport.authenticate('local-signin',{
    successRedirect:'/webSiteOwner',
    failureRedirect:'./login'
  }
));

router
  .get('/signup',authController.siteOwner_signup)
  .post('/signup',passport.authenticate('local-signup',{
    successRedirect: '/webSiteOwner',
    failureRedirect: './signup'
  }
));

router.get('/forgetPw',function(req,res){
  res.render('webSiteOwner/login/forgot-password');
});





module.exports = router;
