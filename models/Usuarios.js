module.exports = (Sequelize, DataTypes) => {
    const Usuarios = Sequelize.define('Usuarios', {
        primeiroNome: DataTypes.STRING,
        ultimoNome: DataTypes.STRING,
        biografia: DataTypes.TEXT,
        idade: DataTypes.INTEGER,
        email: DataTypes.STRING,
        senha: DataTypes.STRING
    });


    Usuarios.associate = models => {
        Usuarios.hasMany(models.Posts);
    }

    return Usuarios;

}