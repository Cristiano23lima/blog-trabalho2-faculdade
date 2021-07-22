'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Posts', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      UsuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        allowNull: false
      },
      descricao: {type: Sequelize.DataTypes.TEXT, allowNull: false},
      quantidadeLikes: {type: Sequelize.DataTypes.INTEGER},
      createdAt: {type: Sequelize.DataTypes.DATE, allowNull: true},
      updatedAt: {type: Sequelize.DataTypes.DATE, allowNull: true},
    })
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.dropTable('Posts');
  }
};
