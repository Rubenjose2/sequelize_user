'use strict';
module.exports = (sequelize, DataTypes) => {
    var Access = sequelize.define('Access', {
            description: DataTypes.STRING,
            level: DataTypes.INTEGER
        }
        // , {
        //     classMethods: {
        //         associate: function(models) {
        //             Access.belongsTo(models.users)
        //         }
        //     }
        // }
    );
    // Access.associate = function(models) {
    //     Access.belongsTo(models.user)
    // }
    return Access;
};