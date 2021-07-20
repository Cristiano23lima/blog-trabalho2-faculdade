import { NextFunction, Request, Response } from "express";

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

    async autorizacao(req: Request, res: Response, next: any){
        const token = req.headers.authorization;
        
        if(!token){
            return res.status(401).json({auth: false, mensagem: "Não autorizado, por favor faça login para prosseguir"});
        }

        jwt.verify(token, process.env.SECRET, (err: any, decoded: any) => {
            if(err) return res.status(500).json({auth: false, mensagem: "Falha na autenticação por esse token"});

            next();
        })
    }
}


export default new AutenticacaoController();