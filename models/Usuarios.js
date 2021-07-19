// const { Sequelize, DataTypes} = require("sequelize");

const Usuarios = (Sequelize, DataTypes) => {
    return Sequelize.define('usuarios', {
        primeiroNome: DataTypes.STRING,
        ultimoNome: DataTypes.STRING,
        biografia: DataTypes.TEXT,
        idade: DataTypes.INTEGER
    })
} 

module.exports = Usuarios;