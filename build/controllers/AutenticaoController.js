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
const jwt = require('jsonwebtoken');
const { Usuarios } = require("../../models");
class AutenticacaoController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, senha } = req.body;
            const usuarioLogado = yield Usuarios.findOne({ where: { email: email, senha: senha } });
            if (usuarioLogado === null) {
                return res.status(401).json({ mensagem: "Email ou senha inválido" });
            }
            const token = jwt.sign({ id: usuarioLogado.id }, process.env.SECRET, {
                expiresIn: 3600 //expira em 1 hora
            });
            return res.status(200).json({ auth: true, token: token });
        });
    }
    autorizacao(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = req.headers.authorization;
            if (!token) {
                return res.status(401).json({ auth: false, mensagem: "Não autorizado, por favor faça login para prosseguir" });
            }
            jwt.verify(token, process.env.SECRET, (err, decoded) => {
                if (err)
                    return res.status(500).json({ auth: false, mensagem: "Falha na autenticação por esse token" });
                req.headers.idUsuario = decoded.id;
                next();
            });
        });
    }
}
exports.default = new AutenticacaoController();
