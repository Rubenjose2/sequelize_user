module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
        full_name: {
            type: DataTypes.STRING,
            alloNull: false,
            validate: {
                len: [1]
            }
        },
        user_name: {
            type: DataTypes.STRING,
            alloNull: false,
            validate: {
                len: [1]
            }
        },
        adress: {
            type: DataTypes.STRING,
            alloNull: true,
            validate: {
                len: [1]
            }
        },
        city: DataTypes.STRING,
        zip: DataTypes.INTEGER,
        avatar: DataTypes.STRING,
        security_level: DataTypes.INTEGER,
        password: DataTypes.STRING

    });
    user.associate = function(models) {
        user.belongsTo(models.Access, { foreignKey: 'security_level', targetKey: 'level' })
    }
    return user;
}