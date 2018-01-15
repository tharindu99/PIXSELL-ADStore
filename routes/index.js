var express = require('express');
var router = express.Router();
var webSiteOwner = require('./webSiteOwner');
var adClient = require('./adClient');

/* GET home page. */

router.use('/webSiteOwner',webSiteOwner);
router.use('/adclient',adClient);

router.get('/', function(req, res, next) {
  var pageBasic = {
    page_title:'PIXSELL'
  }
  var headerBar = {
    header_title:'PIXSELL AD-Store',
    header_title_URL:'#'
  }
  var leftMenu = {
    menu:{
        items :[
          {name:'Home',class:'active',url:'/',icon:'home'},
          {name:'About',class:'normal',url:'/about',icon:'gamepad'},
        ]
    },
    footer:{
    }
  }
  res.render('home',{pageBasic:pageBasic,headerBar:headerBar,leftMenu:leftMenu});
});

router.get('/about', function(req, res, next) {
  var pageBasic = {
    page_title:'About'
  }
  var headerBar = {
    header_title:'PIXSELL AD-Store About',
    header_title_URL:'#'
  }
  var leftMenu = {
    menu:{
        items :[
          {name:'Home',class:'normal',url:'/',icon:'home'},
          {name:'About',class:'active',url:'about',icon:'gamepad'},
        ]
    },
    footer:{

    }
  }
  
  res.render('base',{pageBasic:pageBasic,headerBar:headerBar,leftMenu:leftMenu});
});


module.exports = router;
