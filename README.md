# Hacktiv8 Bank
Hello and welcome to Hacktiv8 bank repository! In here, you can _**create**_, _**read**_, and _**update**_ data like Customers and Accounts.

_p.s.: This repo is for educational purpose. (Holiday Homework for Glasgow Fox 2020 @Hacktiv8)_

## Before you start
Make sure [Node.js](https://nodejs.org/en/ "Node.js")  is installed in your machine.

## Let's get started
 1. First, all you had to do is clone this repo <br> `$ git clone https://github.com/ralfarios/hacktiv8-bank`
 2. Second, install the packages <br>
 `$ npm install`
 3. Install sequelize-cli (global recommended).
 `$ npm install -g sequelize-cli`
 4. Lastly, setup the Sequelize database with these commands: 
    - For create the database<br>
    `$ sequelize db:create`
    - For creating the tables and stuff<br>
    `$ sequelize db:migrate`
    - For seed the data<br>
    `$ sequelize db:seed:all`
 5. AND YOU GOOD TO GO! 

## Executing
After everything is done, let's execute it with `$ node app.js` or if you already installed nodemon `$ nodemon app.js`, after that visit [http://localhost:3000](http://localhost:3000 "http://localhost:3000").

## Router
| Method       | Route                                                 | Description                                                                     |
|--------------|-------------------------------------------------------|---------------------------------------------------------------------------------|
| GET          | `/customers`                                          | For showing `Customers` data                                                    |
| GET & POST   | `/customers/register`                                 | For Register as `Customer`                                                      |
| GET & POST   | `/customers/:idCustomer/editProfile`                  | For Update `Customer` data                                                      |
| GET & POST   | `/customers/:idCustomer/accounts`                     | For showing `Accounts` list that opened by `Customer` and form for add `Account`|
| GET & POST   | `/customers/:idCustomer/accounts/:idAccount/transfer` | For showing transfer form from current `Account` to another                     |

## Origin
Forked from [EurydiceAndOrpheus - Bank](https://github.com/EurydiceAndOrpheus/bank "EurydiceAndOrpheus - Bank") @github as holiday homework.