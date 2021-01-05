'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Account extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Account.belongsTo(models.Customer);
    }
  };
  Account.init({
    type: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Please select account type!',
        }
      }
    },
    balance: {
      type: DataTypes.FLOAT,
      validate: {
        min: {
          args: 500000,
          msg: 'Minimum balance for new Account Rp 500.000'
        }
      }
    },
    CustomerId: DataTypes.NUMBER,
    accountNumber: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(instance, options) {
        let output = '';

        while (output.length < 10) {
          output += Math.floor((Math.random() * 9) + 1);
        }

        instance.accountNumber = output;
      },
    },
    sequelize,
    modelName: 'Account',
  });
  return Account;
};