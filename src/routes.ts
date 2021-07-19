import UsuariosController from "./controllers/UsuariosController";

const { Router } = require('express');

const rotas: any = new Router();

rotas.post("/save", UsuariosController.save);


module.exports = rotas;