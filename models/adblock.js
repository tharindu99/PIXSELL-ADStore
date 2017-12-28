module.exports = function(sequelize,Sequelize){
    var Adblock = sequelize.define('adblock',{
        id: {
            autoIncrement:true,
            primaryKey:true,
            type:Sequelize.INTEGER
        },
        name:{
            type:Sequelize.TEXT,
            notEmpty:true
        }, 
        url: {
            type: Sequelize.STRING,
            allowNull: false
        },
        height:{
            type:Sequelize.INTEGER,
            allowNull: false,
        },
        width:{
            type:Sequelize.INTEGER,
            allowNull: false,
        },
        duration:{
            //number of days
            type:Sequelize.INTEGER,
            allowNull: false,
        },
        start:{
            type: Sequelize.DATE,
            allowNull: false,
        },
        baseprice:{
            type: Sequelize.FLOAT,
            allowNull: false,
        },
        setOwnerRisk:{
            //between 0 to 100
            type: Sequelize.INTEGER,
            defaultValue:50
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
    });
    return Adblock;
}