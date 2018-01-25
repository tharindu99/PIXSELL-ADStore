module.exports = function(sequelize,Sequelize){
    var SuperAgent = sequelize.define('superagent',{
        agentid: {
            autoIncrement:true,
            primaryKey:true,
            type:Sequelize.INTEGER
        },
        availablePx:{
            type:Sequelize.INTEGER,
            defaultValue:0
        },
        pricePerPX:{
            type:Sequelize.DOUBLE,
            defaultValue:0
        }, 
        timestamp: {
            type: Sequelize.DATE
        },  
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
    });
    return SuperAgent;
}