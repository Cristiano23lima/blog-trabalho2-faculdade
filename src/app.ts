import { NextFunction, Response, Request } from "express";

const express = require("express");
const routes = require('./routes');
const cors = require('cors');


require("dotenv-safe").config();


class App {
    server: any = null;

    constructor() {
        this.server = express();
        this.ativarCors();
        this.middlewares();
        this.routes();
    }

    ativarCors() {
        this.server.use((req: Request, res: Response, next: NextFunction) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
            cors();
            next();
        });
    }

    routes() {
        this.server.use(routes);
    }

    middlewares() {
        this.server.use(express.json());
    }
}

module.exports = new App().server;