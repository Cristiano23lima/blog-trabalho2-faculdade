"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AutenticaoController_1 = __importDefault(require("./controllers/AutenticaoController"));
const UsuariosController_1 = __importDefault(require("./controllers/UsuariosController"));
const PostsController_1 = __importDefault(require("./controllers/PostsController"));
const { Router } = require('express');
const rotas = new Router();
//ROTAS DO USUARIO
rotas.post("/usuario/save", UsuariosController_1.default.save);
rotas.get("/usuario/buscar-usuario/:id", AutenticaoController_1.default.autorizacao, UsuariosController_1.default.findById);
rotas.put("/usuario/atualizar-info/:id", AutenticaoController_1.default.autorizacao, UsuariosController_1.default.update);
//ROTAS DO POSTS
rotas.post("/posts/save", AutenticaoController_1.default.autorizacao, PostsController_1.default.save);
rotas.delete("/posts/deletar/:idPost", AutenticaoController_1.default.autorizacao, PostsController_1.default.delete);
rotas.get("/posts/buscar-posts", PostsController_1.default.findAllPosts);
//ROTAS DA AUTENTICAÇÃO
rotas.post("/login", AutenticaoController_1.default.login);
module.exports = rotas;
