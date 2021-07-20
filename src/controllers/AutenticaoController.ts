import { Request, Response } from "express";

const jwt = require('jsonwebtoken');
const { Usuarios } = require("../../models");

class AutenticacaoController{
    async login(req: Request, res: Response){
        const {email, senha} = req.body;

        const usuarioLogado: any = await Usuarios.findOne({where: {email: email, senha: senha}});

        if(usuarioLogado === null){
            return res.status(401).json({mensagem: "Email ou senha inválido"});
        }

        const token = jwt.sign({id: usuarioLogado.id}, process.env.SECRET, {
            expiresIn: 3600 //expira em 1 hora
        });

        return res.status(200).json({auth: true, token: token});
    }
}


export default new AutenticacaoController();