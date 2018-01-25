module.exports = function(sequelize,Sequelize){
    var adblock_history = sequelize.define('adblock_history',{
        recordid: {
            autoIncrement:true,
            primaryKey:true,
            type:Sequelize.INTEGER
        },
        views:{
            type:Sequelize.INTEGER,
            notEmpty:true
        },
        clicks:{
            type:Sequelize.INTEGER,
            notEmpty:true
        },  
        timestamp: {
            type: Sequelize.DATE
        },
        impressions:{
            type:Sequelize.INTEGER,
            default:0
        },
        demand:{
            type:Sequelize.INTEGER,
            default:0
        }
 
    });
    return adblock_history;
}