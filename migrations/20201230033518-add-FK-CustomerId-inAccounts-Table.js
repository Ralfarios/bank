'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Accounts', 'CustomerId', {
      type: Sequelize.INTEGER,
      references: {
        model: { tableName: 'Customers' },
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Accounts', 'CustomerId', {});
  }
};
