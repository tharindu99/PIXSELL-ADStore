var express = require('express');
var router = express.Router();



router.get('/', function(req, res, next) {
  var pageBasic = {
    page_title:'PIXSELL'
  }
  var headerBar = {
    header_title:'PIXSELL AD-Store - WEB SITE OWNER',
    header_title_URL:'#'
  }
  var leftMenu = {
    user:{
      name:'Tharindu Madushanka',
      image:'../../../../../images/user.png',
      subtitile:'ABC.lk | BC.com'
    },
    menu:{
        items :[
          {name:'Home',class:'active',url:'/',icon:'home'},
          {name:'AD Blocks',class:'normal',url:'webSiteOwner/adblock',icon:'widgets'},
          {name:'My Account',class:'normal',url:'#',icon:'verified_user'},
          {name:'Help',class:'normal',url:'/help',icon:'help'},
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
  res.render('webSiteOwner',{pageBasic:pageBasic,headerBar:headerBar,leftMenu:leftMenu,page_content:page_content});
});

router.get('/adblock',function(req,res,next){
  var pageBasic = {
    page_title:'PIXSELL'
  }
  var headerBar = {
    header_title:'PIXSELL AD-Store - WEB SITE OWNER',
    header_title_URL:'#'
  }
  var leftMenu = {
    user:{
      name:'Tharindu Madushanka',
      image:'../../../../../images/user.png',
      subtitile:'ABC.lk | BC.com'
    },
    menu:{
        items :[
          {name:'Home',class:'normal',url:'/webSiteOwner',icon:'home'},
          {name:'AD Blocks',class:'active',url:'webSiteOwner/adblock',icon:'widgets'},
          {name:'My Account',class:'normal',url:'#',icon:'verified_user'},
          {name:'Help',class:'normal',url:'/help',icon:'help'},
        ]
    },
    footer:{
    }
  } 
  
  var page_content = {
    block_register:{

    },
    formWizard:{

    },
    adblocksView:{ 
      blocks:[
        {name:'ABC.lk - Top A',subTitle:'',size:6,color:'red'},
        {name:'BC.com - Top C',subTitle:'',size:6,color:'green'},
        {name:'ABC.lk - Left A',subTitle:'',size:6,color:'blue'}
      ]
    }
  }
  res.render('webSiteOwner',{pageBasic:pageBasic,headerBar:headerBar,leftMenu:leftMenu,page_content:page_content})
});






module.exports = router;
