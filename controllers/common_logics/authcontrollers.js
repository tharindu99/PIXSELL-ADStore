var exports = module.exports = {}

exports.siteOwner_signup = function(req,res){
    res.render('webSiteOwner/login/sign-up');
}

exports.siteOwner_signin = function(req,res){
    res.render('webSiteOwner/login/sign-in');  
}