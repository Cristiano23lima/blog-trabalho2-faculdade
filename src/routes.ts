import AutenticacaoController from "./controllers/AutenticaoController";
import UsuariosController from "./controllers/UsuariosController";

const { Router } = require('express');

const rotas: any = new Router();


//ROTAS DO USUARIO
rotas.post("/save", UsuariosController.save);
rotas.get("/buscar-usuario/:id", UsuariosController.findById);
rotas.put("/atualizar-info/:id", UsuariosController.update);

//ROTAS DA AUTENTICAÇÃO
rotas.post("/login", AutenticacaoController.login);

module.exports = rotas;