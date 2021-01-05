// module
const { Op } = require('sequelize');

// model
const { Account, Customer } = require('../models/index.js');

// helpers
const formatter = require('../helpers/idrFormatter.js');
const { minusBalance } = require('../helpers/opBalance.js')
const { plusBalance } = require('../helpers/opBalance.js');

class Controller {
  static landingRedir(req, res) {
    res.redirect('/customers');
  };

  static findAll(req, res) {
    Customer.findAll({ order: [['fullName', 'ASC']] })
      .then(data => res.render('index', { data }))
      .catch(err => res.send(err));
  };

  static registerForm(req, res) {
    res.render('regForm');
  };

  static register(req, res) {
    const input = {
      identityNumber: req.body.identityNumber,
      fullName: req.body.fullName,
      address: req.body.address,
      birthDate: req.body.birthDate === '' ? '2000-01-01' : req.body.birthDate,
      gender: req.body.gender
    };

    Customer.create(input)
      .then(() => res.redirect('/customers'))
      .catch(err => {
        let errMsg = [];
        err.errors.forEach(e => {
          errMsg.push(e.message);
        });
        res.send(errMsg);
      });
  };

  static editForm(req, res) {
    const inputID = Number(req.params.idCustomer);

    Customer.findByPk(inputID)
      .then(data => res.render('editForm', { data }))
      .catch(err => res.send(err));
  };

  static edit(req, res) {
    const input = {
      identityNumber: req.body.identityNumber,
      fullName: req.body.fullName,
      address: req.body.address,
      birthDate: req.body.birthDate === '' ? '2000-01-01' : req.body.birthDate,
      gender: req.body.gender
    };

    Customer.update(input, { where: { id: Number(req.params.idCustomer) } })
      .then(() => res.redirect('/customers'))
      .catch(err => {
        let errMsg = [];
        err.errors.forEach(e => {
          errMsg.push(e.message);
        });
        res.send(errMsg);
      });
  };

  static accountList(req, res) {
    const inputID = Number(req.params.idCustomer);

    Customer.findByPk(inputID, { include: [Account] })
      .then(data => res.render('accountList', { data, formatter }))
      .catch(err => res.send(err));
  };

  static account(req, res) {
    const input = {
      type: req.body.type,
      balance: Number(req.body.balance) === 0 ? 500000 : Number(req.body.balance),
      CustomerId: Number(req.params.idCustomer)
    };

    Account.create(input)
      .then(() => res.redirect(`/customers/${Number(req.params.idCustomer)}/accounts`))
      .catch(err => {
        let errMsg = [];
        err.errors.forEach(e => {
          errMsg.push(e.message);
        });
        res.send(errMsg);
      });
  };

  static transferForm(req, res) {
    let inputID = Number(req.params.idAccount);
    let accountData;

    Account.findByPk(inputID)
      .then(data => {
        accountData = data;
        return Account.findAll({ where: { id: { [Op.not]: [inputID] } }, include: [Customer], order: [['accountNumber', 'ASC']] });
      })
      .then(data => res.render('transferForm', { accountData, data })
      )
      .catch(err => {
        let errMsg = [];
        err.errors.forEach(e => {
          errMsg.push(e.message);
        });
        res.send(errMsg);
      });
  };

  static transfer(req, res) {
    let balanceInp = Number(req.body.amount)
    let fromAccId = Number(req.params.idAccount);
    let forAccID = Number(req.body.accountID);

    Account.findByPk(fromAccId)
      .then(data => Account.update(minusBalance(data.balance, balanceInp, forAccID), { where: { id: fromAccId } }))
      .then(() => Account.findByPk(forAccID))
      .then(data => {
        Account.update(plusBalance(data.balance, balanceInp), { where: { id: forAccID } })
        res.redirect(`/customers/${Number(req.params.idCustomer)}/accounts`)
      })
      .catch(err => res.send(err));
  };
};

module.exports = Controller;