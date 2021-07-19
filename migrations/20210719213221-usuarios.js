'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Usuarios', {
      primeiroNome: Sequelize.DataTypes.STRING,
      ultimoNome: Sequelize.DataTypes.STRING,
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      idade: Sequelize.DataTypes.INTEGER,
      biografia: Sequelize.DataTypes.TEXT,
      createdAt: {type: Sequelize.DataTypes.DATE, allowNull: true},
      updatedAt: {type: Sequelize.DataTypes.DATE, allowNull: true}
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Usuarios');
  }
};
