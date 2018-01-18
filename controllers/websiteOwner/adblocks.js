module.exports = {
    adblocks_component : function(demo_user){
        var pageBasic = {
            page_title:'PIXSELL'
            }
        var headerBar = {
            header_title:'PIXSELL AD-Store - WEB SITE OWNER',
            header_title_URL:'#'
            }
        var leftMenu = {
            user:{
              name:demo_user.name,
              image:demo_user.image,
              subtitile:'ABC.lk | BC.com'
            },
            menu:{
                items :[
                  {name:'Home',class:'normal',url:'./',icon:'home'},
                  {name:'AD Blocks',class:'active',url:'#',icon:'widgets'},
                  {name:'My Account',class:'normal',url:'#',icon:'verified_user'},
                  {name:'Help',class:'normal',url:'#',icon:'help'},
                ]
            },
            footer:{
            }
        } 
        var block_fillData=[];
        var blocks =  models.adblock.findAll({
            where: {
              ownerid: 1
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
                    // console.log(block_fillData);
                    var page_content = {
                        adblocksView:{ 
                            blocks : block_fillData
                        }
                    }
                    var output = {pageBasic:pageBasic,headerBar:headerBar,leftMenu:leftMenu,page_content:page_content}
                    
                });
                return output;
    }

}