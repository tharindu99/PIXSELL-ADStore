var express = require('express');
var router = express.Router();
var models = require('../models');

var user = {
  id:1,
  name:'Tharindu Madushanka Peiris',
  image:'../../../../../images/user.png'
}

router.get('/', function(req, res, next) {  

  var numberOfblocks = models.adblock.findAndCountAll({
    where:{
      ownerid: user.id,
      status:'active'
    }
  }).then(his_adblocks=>{


    
    var pageBasic = {
      page_title:'PIXSELL'
    }
    var headerBar = {
      header_title:'PIXSELL AD-Store - WEB SITE OWNER',
      header_title_URL:'./'
    }
    var leftMenu = {
      user:{
        name:user.name,
        image:user.image,
        subtitile:'ABC.lk | BC.com'
      },
  
      menu:{
          items :[
            {name:'Home',class:'active',url:'/',icon:'home'},
            {name:'AD Blocks',class:'normal',url:'webSiteOwner/adblocks',icon:'widgets'},
            {name:'New AD Block',class:'normal',url:'webSiteOwner/newBlock',icon:'crop_square'},
            {name:'My Account',class:'normal',url:'webSiteOwner/myaccount',icon:'verified_user'},
            {name:'Help',class:'normal',url:'#',icon:'help'},
          ]
      },
      footer:{
      }
    } 
    var page_content = {
      dash4panels:{
        items : [
          {name:'Active Blocks',width:4,color:'red',icon:'widgets',value:his_adblocks.count},
          {name:'Earnings',width:4,color:'green',icon:'monetization_on',value:'54K'},
          {name:'Micro Investors',width:4,color:'blue',icon:'grain',value:2468}
        ]
      }
    }
var output = {pageBasic:pageBasic,headerBar:headerBar,leftMenu:leftMenu,page_content:page_content}
res.render('webSiteOwner',output);
  }); 

          
});

router.get('/adblocks',function(req,res,next){
  res.render('webSiteOwner',adblocks_component.adblocks_component(demo_user));
});

router.get('/newBlock',function(req,res,next){
  res.render('webSiteOwner',base_component.base_component(demo_user));
});

router.get('/myaccount',function(req,res,next){
  res.render('webSiteOwner',base_component.base_component(demo_user));
});

router.post('/newAdblockRegistration',function(req,res,next){
  console.log(req.body);
  var keyurl = keyurlGen.block_keyURLGen(req.body.siteURL,req.body.blockName,req.body.width*req.body.height);

  var Addnewblock =  models.adblock
                           .create({
                             name:req.body.blockName,
                             keyurl:keyurl,
                             siteurl:req.body.siteURL,
                             websitename:req.body.siteName,
                             height:req.body.height,
                             width:req.body.width,
                             duration:req.body.duration,
                             start:moment(),
                             baseprice:req.body.baseprice,
                             setOwnerRisk:req.body.setownerrisk,
                             status:'inactive',
                             createdAt:moment(),
                             updatedAt:moment(),
                             ownerid:demo_user.id
                           })
                           .then( bln => {
                             console.log("new block added to db")
                             res.redirect('./adblock');
                            });

  //console.log("llllllllllllllllllllllll"+req.body.siteName);
  
});



module.exports = router;
