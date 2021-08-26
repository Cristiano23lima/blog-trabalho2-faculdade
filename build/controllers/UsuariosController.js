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
const { Usuarios } = require("../../models");
class UsuariosController {
    save(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { primeiroNome, ultimoNome, biografia, idade, email, senha } = req.body;
            if (!email || !senha) {
                return res.status(400).json({ mensagem: "Campos obrigátorios vazios!" });
            }
            const usuarioEncontrado = yield Usuarios.findOne({ where: { email } });
            if (usuarioEncontrado !== null) {
                console.log('Usuário já cadastrado com email ' + email);
                return res.status(409).json({ mensagem: "Já existe uma conta cadastrada com esse email" });
            }
            const usuarioSalvo = yield Usuarios.create({ primeiroNome, ultimoNome, biografia, idade, email, senha });
            return res.status(201).json(usuarioSalvo);
        });
    }
    findById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const idUsuario = Number.parseInt(req.params.id);
            const usuarioEncontrado = yield Usuarios.findOne({ where: { id: idUsuario } });
            if (usuarioEncontrado === null) {
                return res.status(404).json({ mensagem: "Não foi possível encontrar o usuário" });
            }
            return res.status(200).json(usuarioEncontrado);
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { primeiroNome, ultimoNome, biografia, idade, email } = req.body;
            const id = Number.parseInt(req.params.id);
            let usuarioEncontrado = yield Usuarios.findOne({ where: { id } });
            if (usuarioEncontrado === null) {
                return res.status(404).json({ mensagem: "Não foi possível encontrar o usuário" });
            }
            const usuarioAtualizado = Object.assign(Object.assign({}, usuarioEncontrado.dataValues), { email,
                primeiroNome,
                ultimoNome,
                biografia,
                idade });
            yield Usuarios.update(usuarioAtualizado, { where: { id } }).catch((err) => res.status(500).json({ mensagem: "Erro interno ao tentar atualizar usuário" }));
            return res.status(200).json(usuarioAtualizado);
        });
    }
}
exports.default = new UsuariosController();
