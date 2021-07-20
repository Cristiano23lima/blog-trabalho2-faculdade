
module.exports = (Sequelize, DataTypes) => {
    const Posts = Sequelize.define('Posts', {
        descricao: DataTypes.TEXT,
        quantidadeLikes: DataTypes.INTEGER,
        idUsuario: DataTypes.INTEGER
    });

    return Posts;
}