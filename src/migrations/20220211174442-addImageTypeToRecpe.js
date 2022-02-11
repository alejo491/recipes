'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Recipes', 'type', { 
      type: Sequelize.STRING, 
      allowNull: false, 
    });
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Recipes', 'type');
  }
};
