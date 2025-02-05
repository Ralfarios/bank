'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.hasMany(models.Account);
    }
  };
  Customer.init({
    identityNumber: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Identity Number must be filled',
        },
        len: {
          args: [16, 20],
          msg: 'Identity Number minimum 16 characters and maximum 20 characters',
        },
        duplicateIDNumber(value) {
          return Customer.findOne({ where: { identityNumber: value } })
            .then(identityNumber => { if (identityNumber) throw new Error('Duplicate Identity Number'); });
        }
      },
    },
    fullName: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Full name must be filled',
        },
      }
    },
    address: DataTypes.STRING,
    birthDate: {
      type: DataTypes.DATE,
      validate: {
        notEmpty: {
          msg: 'Birth Date must be filled',
        },
      }
    },
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};