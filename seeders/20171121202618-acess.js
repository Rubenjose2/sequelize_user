'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('Accesses', [{
                description: "Administrator",
                level: 1,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                description: "User",
                level: 2,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});

    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Accesses', null, {});
    }
};