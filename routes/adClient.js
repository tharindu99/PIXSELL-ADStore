var express = require('express');
var router = express.Router(); 
var models = require('../models');
var randomGen = require('../controllers/common_logics/randomGen');

var demo_user = {
  id:1,
  name:'Kelum Rubasin',
  image:'../../../../../images/user.png'
}

router.get('/', function(req, res, next) {
  var pageBasic = {
    page_title:'PIXSELL'
  }
  var headerBar = {
    header_title:'PIXSELL AD-Store - Advertising Client',
    header_title_URL:'./'
  }
  var leftMenu = {
    user:{
      name:demo_user.name,
      image:demo_user.image,
      subtitile:''
    },

    menu:{
        items :[
          {name:'Home',class:'active',url:'/',icon:'home'},
          {name:'My Account',class:'normal',url:'#',icon:'verified_user'},
        ]
    },
    footer:{
    }
  } 
  var page_content = {
    dash4panels:{
      items : [
        {name:'Active Blocks',width:4,color:'red',icon:'widgets',value:3},
        {name:'Earnings',width:4,color:'green',icon:'monetization_on',value:'54K'},
        {name:'Micro Investors',width:4,color:'blue',icon:'grain',value:2468}
      ]
    }
  }
  res.render('adClient',{pageBasic:pageBasic,headerBar:headerBar,leftMenu:leftMenu,page_content:page_content});
});


module.exports = router;
