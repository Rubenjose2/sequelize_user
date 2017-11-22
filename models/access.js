'use strict';
module.exports = (sequelize, DataTypes) => {
    var Access = sequelize.define('Access', {
        description: DataTypes.STRING,
        level: DataTypes.INTEGER
    });
    return Access;
};