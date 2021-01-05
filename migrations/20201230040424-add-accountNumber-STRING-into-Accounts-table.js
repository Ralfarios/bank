'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Accounts', 'accountNumber', { type: Sequelize.STRING });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Accounts', 'accountNumber', {});
  }
};
