'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const fs = require('fs');
    const data = JSON.parse(fs.readFileSync('./database/customers.json', 'utf-8'));

    data.forEach(e => {
      e.createdAt = new Date();
      e.updatedAt = new Date();
    });

    return queryInterface.bulkInsert('Customers', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Customers', null, {});
  }
};
