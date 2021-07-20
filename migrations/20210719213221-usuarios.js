'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Usuarios', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      primeiroNome: Sequelize.DataTypes.STRING,
      ultimoNome: Sequelize.DataTypes.STRING,
      idade: Sequelize.DataTypes.INTEGER,
      biografia: Sequelize.DataTypes.TEXT,
      email: {type: Sequelize.DataTypes.STRING, allowNull: false, unique: true},
      senha: {type: Sequelize.DataTypes.STRING, allowNull: false},
      createdAt: {type: Sequelize.DataTypes.DATE, allowNull: true},
      updatedAt: {type: Sequelize.DataTypes.DATE, allowNull: true},
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Usuarios');
  }
};
