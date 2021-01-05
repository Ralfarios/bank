const express = require('express');
const app = express();
const router = require('./routers/router.js');

const port = 3000;

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));

app.use('/', router);

app.listen(port, () => console.log(`Hacktiv8 Bank is running in port :${3000}`));