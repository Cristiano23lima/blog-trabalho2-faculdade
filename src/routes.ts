import AutenticacaoController from "./controllers/AutenticaoController";
import UsuariosController from "./controllers/UsuariosController";
import PostsController from "./controllers/PostsController";

const { Router } = require('express');

const rotas: any = new Router();


//ROTAS DO USUARIO
rotas.post("/usuario/save", UsuariosController.save);
rotas.get("/usuario/buscar-usuario/:id", AutenticacaoController.autorizacao, UsuariosController.findById);
rotas.put("/usuario/atualizar-info/:id", AutenticacaoController.autorizacao, UsuariosController.update);

//ROTAS DO POSTS
rotas.post("/posts/save", AutenticacaoController.autorizacao, PostsController.save);
rotas.delete("/posts/deletar/:idPost", AutenticacaoController.autorizacao, PostsController.delete);
rotas.get("/posts/buscar-posts", PostsController.findAllPosts);

//ROTAS DA AUTENTICAÇÃO
rotas.post("/login", AutenticacaoController.login);

module.exports = rotas;