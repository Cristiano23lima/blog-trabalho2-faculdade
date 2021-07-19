const { Usuarios } = require("../../models");

class UsuariosController{
    async save(req: Request, res: Response){
        return await Usuarios.save(req.body);
    }

    update(){

    }

    find(){}

    findAll(){}
}

export default new UsuariosController();