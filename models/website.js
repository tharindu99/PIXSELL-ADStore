module.exports = function(sequelize,Sequelize){
    var Website = sequelize.define('website',{
        id: {
            autoIncrement:true,
            primaryKey:true,
            type:Sequelize.INTEGER
        },
        name:{
            type:Sequelize.STRING,
            notEmpty:true
        }, 
        url: {
            type: Sequelize.STRING,
            allowNull: false
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
    });
    return Website;
}