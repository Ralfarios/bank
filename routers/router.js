// Controller
const Controller = require('../controllers/controller.js')

// module
const express = require('express');
const router = express.Router();

// Landing
router.get('/', Controller.landingRedir);

// Customers: List
router.get('/customers', Controller.findAll);

// Customers: Register
router.get('/customers/register', Controller.registerForm);
router.post('/customers/register', Controller.register);

// Customers: Edit
router.get('/customers/:idCustomer/editProfile', Controller.editForm);
router.post('/customers/:idCustomer/editProfile', Controller.edit);

// Customers: List Accounts
router.get('/customers/:idCustomer/accounts', Controller.accountList);
router.post('/customers/:idCustomer/accounts', Controller.account);

// Customers: Transfer to Other Account
router.get('/customers/:idCustomer/accounts/:idAccount/transfer', Controller.transferForm);
router.post('/customers/:idCustomer/accounts/:idAccount/transfer', Controller.transfer);

module.exports = router;