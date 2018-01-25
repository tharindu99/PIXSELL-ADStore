module.exports = function(sequelize,Sequelize){
    var website = sequelize.define('website',{
        siteid: {
            autoIncrement:true,
            primaryKey:true,
            type:Sequelize.INTEGER
        },
        name:{
            type:Sequelize.STRING,
            notEmpty:true
        }, 
        URL: {
            type: Sequelize.STRING,
            validate: {
                isUrl: true
            }
        },
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
    }
);

   

    return website;
}