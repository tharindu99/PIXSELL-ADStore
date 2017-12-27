var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;



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

router.get('/login',function(req,res){
  res.render('webSiteOwner/login/sign-in');  
});

router.post('/login',passport.authenticate('local', { 
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true
})
);

router.get('/register',function(req,res){
  res.render('webSiteOwner/login/sign-up');
});

router.get('/forgetPw',function(req,res){
  res.render('webSiteOwner/login/forgot-password');
});





module.exports = router;
