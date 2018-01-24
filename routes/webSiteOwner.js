var express = require('express');
var router = express.Router();

var base_component = require('../controllers/websiteOwner/base');
var adblocks_component = require('../controllers/websiteOwner/adblocks');

var demo_user = {
  id:1,
  name:'Tharindu Madushanka Peiris',
  image:'../../../../../images/user.png'
}

router.get('/', function(req, res, next) {  
  res.render('webSiteOwner',base_component.base_component(demo_user));
});

router.get('/adblocks',function(req,res,next){
  //res.render('webSiteOwner',base_component.base_component(demo_user));
  console.log(adblocks_component.adblocks_component(demo_user));
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
