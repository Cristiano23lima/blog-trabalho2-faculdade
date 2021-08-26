"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Posts, Usuarios } = require("../../models");
class PostsController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { descricao } = req.body;
            const idUsuario = req.headers.idUsuario;
            if (!idUsuario) {
                return res.status(500).json({ mensagem: "Houve um problema interno ao salvar post" });
            }
            let quantidadeLikes = 0;
            if (!descricao) {
                return res.status(400).json({ mensagem: "Campos obrigatórios vazios" });
            }
            const postSalvo = yield Posts.create({ descricao, quantidadeLikes, UsuarioId: idUsuario });
            return res.status(201).json(postSalvo);
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idPost } = req.params;
            if (!idPost) {
                return res.status(400).json({ mensagem: "Nenhum id encontrado, para deletar o post" });
            }
            yield Posts.destroy({ where: { id: idPost } });
            return res.status(200).json({ mensagem: "Post deletado com sucesso" });
        });
    }
    findAllPosts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let posts = yield Posts.findAll({
                include: {
                    model: Usuarios,
                    attributes: ['primeiroNome', 'ultimoNome', 'email']
                },
                order: [
                    ['createdAt', 'DESC']
                ],
                attributes: ['id', 'descricao', 'quantidadeLikes', 'createdAt']
            });
            return res.status(200).json(posts);
        });
    }
}
exports.default = new PostsController();
