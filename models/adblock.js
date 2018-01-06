module.exports = function(sequelize,Sequelize){
    var Adblock = sequelize.define('adblock',{
        blockid: {
            autoIncrement:true,
            primaryKey:true,
            type:Sequelize.INTEGER
        },
        name:{
            type:Sequelize.TEXT,
            notEmpty:true
        }, 
        keyurl: {
            type: Sequelize.STRING,
            allowNull: false
        },
        siteurl: {
            type: Sequelize.STRING,
            allowNull: false
        },
        websitename: {
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
            defaultValue:50,
            validate: { min: 0, max: 100 }
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
    }


);
    return Adblock;
}