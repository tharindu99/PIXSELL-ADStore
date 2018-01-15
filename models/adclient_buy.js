module.exports = function(sequelize,Sequelize){
    var adclient_buy = sequelize.define('adclient_buy',{
        start:{
            type: Sequelize.DATE,
            allowNull: false,
        },
        price:{
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        duration:{
            //number of days
            type:Sequelize.INTEGER,
            allowNull: false,
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        },
        contentMapping:{
            type:Sequelize.TEXT
        }, 
 
    }


);
    return adclient_buy;
}