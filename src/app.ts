
const express = require("express");
const routes = require('./routes');

require("dotenv-safe").config();


class App{
    server: any = null;

    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    routes(){
        this.server.use(routes);
    }

    middlewares(){
        this.server.use(express.json());
    }
}

module.exports = new App().server;