
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('estabelecimentos', { 
      id: {
        type: Sequelize.INTEGER, 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(70),
        allowNull: false
      },
      logo: {
        type: Sequelize.STRING
      },
      director: {
        type: Sequelize.STRING(70),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(70),
        allowNull: false
      },
      phone: {
        type: Sequelize.STRING(20),
        allowNull: false,
      },
      localization: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('estabelecimentos'),
};
