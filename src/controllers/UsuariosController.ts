import { Response, Request } from "express";

const { Usuarios } = require("../../models");

class UsuariosController{
    async save(req: Request, res: Response){
        const {primeiroNome, ultimoNome, biografia, idade, email, senha} = req.body;

        if(!email || !senha){
            return res.status(400).json({mensagem: "Campos obrigátorios vazios!"});
        }

        const usuarioEncontrado = await Usuarios.findOne({where: {email}});
        if(usuarioEncontrado !== null){
            console.log('Usuário já cadastrado com email '+email);
            return res.status(409).json({mensagem: "Já existe uma conta cadastrada com esse email"});
        }

        const usuarioSalvo = await Usuarios.create({primeiroNome, ultimoNome, biografia, idade, email, senha});
        
        return res.status(201).json(usuarioSalvo);
    }

    async findById(req: Request, res: Response){
        const idUsuario: number = Number.parseInt(req.params.id);

        const usuarioEncontrado = await Usuarios.findOne({where: {id: idUsuario}});

        if(usuarioEncontrado === null){
            return res.status(404).json({mensagem: "Não foi possível encontrar o usuário"})
        }

        return res.status(200).json(usuarioEncontrado);
    }

    async update(req: Request, res: Response){
        const {primeiroNome, ultimoNome, biografia, idade, email} = req.body;
        const id: number = Number.parseInt(req.params.id);

        let usuarioEncontrado: any = await Usuarios.findOne({where: {id}});
        if(usuarioEncontrado === null){
            return res.status(404).json({mensagem: "Não foi possível encontrar o usuário"})
        }

        const usuarioAtualizado = {
            ...usuarioEncontrado.dataValues,
            email,
            primeiroNome,
            ultimoNome,
            biografia,
            idade
        };
        
        await Usuarios.update(usuarioAtualizado, {where: {id}}).catch((err: any) => res.status(500).json({mensagem: "Erro interno ao tentar atualizar usuário"}));

        return res.status(200).json(usuarioAtualizado);
    }
}

export default new UsuariosController();