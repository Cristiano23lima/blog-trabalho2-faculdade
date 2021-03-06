
module.exports = (Sequelize, DataTypes) => {
    const Posts = Sequelize.define('Posts', {
        descricao: DataTypes.TEXT,
        titulo: DataTypes.STRING,
        quantidadeLikes: DataTypes.INTEGER,
    });

    Posts.associate = models => {
        Posts.belongsTo(models.Usuarios);
    }

    return Posts;
}