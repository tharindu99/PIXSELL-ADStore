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
        time: {
            type: Sequelize.DATE
        }
 
    });
    return adblock_history;
}