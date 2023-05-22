const express = require("express");
const morgan = require('morgan');
const routes = require("./routes.js");
require('./utils/configs/database_config.js');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(routes);

app.listen(3001, () => {
    console.log(`Server on port ${3001}`);
});