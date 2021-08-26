"use strict";
const express = require("express");
const routes = require('./routes');
require("dotenv-safe").config();
class App {
    constructor() {
        this.server = null;
        this.server = express();
        this.middlewares();
        this.routes();
    }
    routes() {
        this.server.use(routes);
    }
    middlewares() {
        this.server.use(express.json());
    }
}
module.exports = new App().server;
