module.exports = {
    base_component: function(user){
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
                {name:'Active Blocks',width:4,color:'red',icon:'widgets',value:3},
                {name:'Earnings',width:4,color:'green',icon:'monetization_on',value:'54K'},
                {name:'Micro Investors',width:4,color:'blue',icon:'grain',value:2468}
              ]
            }
          }

          var output = {pageBasic:pageBasic,headerBar:headerBar,leftMenu:leftMenu,page_content:page_content}
         // console.log(output);
        return output;
    }
}