var express = require('express');
var router = express.Router();
var models = require('../models');

var user = {
  id:1,
  name:'Tharindu Madushanka Peiris',
  image:'../../../../../images/user.png'
}

router.get('/', function(req, res, next) {      
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
          {name:'Home',class:'active',url:'#',icon:'home'},
          {name:'AD Blocks',class:'normal',url:'./adblocks',icon:'widgets'},
          {name:'New AD Block',class:'normal',url:'./newBlock',icon:'crop_square'},
          {name:'My Account',class:'normal',url:'./myaccount',icon:'verified_user'},
          {name:'Help',class:'normal',url:'#',icon:'help'},
        ]
      },
      footer:{
      }
    } 
    var page_content = {
      // dash4panels:{
      //   items : [
      //     {name:'Active Blocks',width:4,color:'red',icon:'widgets',value:his_adblocks.count},
      //     {name:'Earnings',width:4,color:'green',icon:'monetization_on',value:'54K'},
      //     {name:'Micro Investors',width:4,color:'blue',icon:'grain',value:2468}
      //   ]
      // }
    }
    var output = {pageBasic:pageBasic,headerBar:headerBar,leftMenu:leftMenu,page_content:page_content}
  res.render('webSiteOwner',output);
}); 

router.get('/adblocks',function(req,res,next){
  var block_fillData=[];
  var blocks =  models.adblock.findAll({
        where: {
          ownerid: user.id
        }
      }).then(blockInst => {
          blockInst.forEach(blk => {
              var temp_earn = randomGen.earn()[0];
              var temp_complete = randomGen.complete()[0];
              var temp_imp = randomGen.imp()[0];
              var temp_demand = randomGen.demand()[0];
  
              block_fillData.push({
                  name:blk.websitename+" : "+blk.name,
                  subTitle:'since '+blk.start,
                  size:6,
                  color:randomGen.color(),
                  widget_earn:{value:temp_earn.earn_Amount,data_arr:temp_earn.earn_Arr},
                  widget_complete:{value:temp_complete.complete_Value,data_arr:temp_complete.complete_Arr},
                  widget_imp:{value:temp_imp.imp_Value,data_arr:temp_imp.imp_Arr},
                  widget_demand:{value:temp_demand.demanding_Value,data_arr:temp_demand.demand_Arr}
              });
          });
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
                {name:'Home',class:'active',url:'./',icon:'home'},
                {name:'AD Blocks',class:'normal',url:'./adblocks',icon:'widgets'},
                {name:'New AD Block',class:'normal',url:'./newBlock',icon:'crop_square'},
                {name:'My Account',class:'normal',url:'./myaccount',icon:'verified_user'},
                {name:'Help',class:'normal',url:'#',icon:'help'},
              ]
            },
            footer:{
            }
          } 
          var page_content = {
                adblocksView:{ 
                  blocks : block_fillData
                }
              }
          var output = {pageBasic:pageBasic,headerBar:headerBar,leftMenu:leftMenu,page_content:page_content}
    res.render('webSiteOwner',output);
  });
});

router.get('/newBlock',function(req,res,next){
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
                {name:'Home',class:'active',url:'./',icon:'home'},
                {name:'AD Blocks',class:'normal',url:'./adblocks',icon:'widgets'},
                {name:'New AD Block',class:'normal',url:'./newBlock',icon:'crop_square'},
                {name:'My Account',class:'normal',url:'./myaccount',icon:'verified_user'},
                {name:'Help',class:'normal',url:'#',icon:'help'},
              ]
            },
            footer:{
            }
          } 
          var page_content = {
            block_register:{ 
            }
          }
      var output = {pageBasic:pageBasic,headerBar:headerBar,leftMenu:leftMenu,page_content:page_content}
    res.render('webSiteOwner',output);
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
