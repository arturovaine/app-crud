import { QueryInterface } from 'sequelize/types';

module.exports = {
  async up (queryInterface: QueryInterface, Sequelize: any) {
    await queryInterface.createTable('customers',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
    );
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('customers');
  },
};
