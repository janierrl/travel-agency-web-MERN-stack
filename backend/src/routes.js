const express = require("express");
const testRoutes = require("./router/test");

const routes = express();

routes.use(testRoutes);

module.exports = routes;