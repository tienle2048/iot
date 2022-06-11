const express = require('express');
const router =  require('./router/test');
const bodyParser = require("body-parser")
const cors =require('cors')

const db = require('./config/db/index')
const app = express();
const port =8080;

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.connect();
router(app);

app.listen(port,()=>console.log('router'));