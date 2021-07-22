
module.exports = (Sequelize, DataTypes) => {
    const Posts = Sequelize.define('Posts', {
        descricao: DataTypes.TEXT,
        quantidadeLikes: DataTypes.INTEGER,
        // idUsuario: DataTypes.INTEGER
    });

    Posts.associate = models => {
        Posts.belongsTo(models.Usuarios);
    }

    return Posts;
}