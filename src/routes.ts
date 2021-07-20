import UsuariosController from "./controllers/UsuariosController";

const { Router } = require('express');

const rotas: any = new Router();

rotas.post("/save", UsuariosController.save);
rotas.get("/buscar-usuario/:id", UsuariosController.findById);
rotas.put("/atualizar-info/:id", UsuariosController.update);

module.exports = rotas;