var crypto = require('crypto');

module.exports = {
    block_keyURLGen:function(siteURL,blockname,size) {
        var data = siteURL+blockname+size+'px';
       // console.log(data);
        var keyUrl =  crypto.createHash('md5').update(data).digest("hex");
        return keyUrl;
    }
}