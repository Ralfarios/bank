'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Accounts', 'balance', {
      type: 'FLOAT(8) USING CAST ("balance" as FLOAT(8))'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Accounts', 'balance', {
      type: 'VARCHAR USING CAST ("balance" as VARCHAR)'
    });
  }
};
