import { Request, Response } from "express";

const { Posts, Usuarios } = require("../../models");

class PostsController {
    async save(req: Request, res: Response) {
        const { descricao, titulo } = req.body;
        const idUsuario = req.headers.idUsuario;

        if (!idUsuario) {
            return res.status(500).json({ mensagem: "Houve um problema interno ao salvar post" });
        }

        let quantidadeLikes: number = 0;

        if (!descricao) {
            return res.status(400).json({ mensagem: "Campos obrigatórios vazios" });
        }

        const postSalvo = await Posts.create({ descricao, titulo, quantidadeLikes, UsuarioId: idUsuario });

        return res.status(201).json(postSalvo);
    }

    async delete(req: Request, res: Response) {
        const { idPost } = req.params;

        if (!idPost) {
            return res.status(400).json({ mensagem: "Nenhum id encontrado, para deletar o post" });
        }

        await Posts.destroy({ where: { id: idPost } });

        return res.status(200).json({ mensagem: "Post deletado com sucesso" });
    }

    async findById(req: Request, res: Response) {
        const { idPost } = req.params;

        if (!idPost) {
            return res.status(400).json({ mensagem: "Nenhum post encontrado" });
        }

        const post = await Posts.findOne({ where: { id: idPost } });

        return res.status(200).json(post);
    }

    async findAllPosts(req: Request, res: Response) {
        let posts = await Posts.findAll({
            include: {
                model: Usuarios,
                attributes: ['primeiroNome', 'ultimoNome', 'email']
            },
            order: [
                ['createdAt', 'DESC']
            ],
            attributes: ['id', 'descricao', 'quantidadeLikes', 'createdAt', 'titulo']
        });

        return res.status(200).json(posts);
    }
}

export default new PostsController();