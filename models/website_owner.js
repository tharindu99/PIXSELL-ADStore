module.exports = function(sequelize,Sequelize){
    var websiteOwner = sequelize.define('websiteOwner',{
        ownerid: {
            autoIncrement:true,
            primaryKey:true,
            type:Sequelize.INTEGER
        },
        name:{
            type:Sequelize.TEXT,
            notEmpty:true
        }, 
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
 
        last_login: {
            type: Sequelize.DATE
        },
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
    }
);

   

    return websiteOwner;
}