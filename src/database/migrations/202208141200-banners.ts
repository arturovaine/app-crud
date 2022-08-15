import { QueryInterface } from 'sequelize/types';

module.exports = {
  async up (queryInterface: QueryInterface, Sequelize: any) {
    await queryInterface.createTable('banners',
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
        },
        image: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        customerID: {
          type: Sequelize.INTEGER,
          // references: {
          //   model: 'customers',
          //   key: 'id',
          // },
          // onUpdate: 'CASCADE',
          // onDelete: 'CASCADE',
        },
        endAt: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        startAt: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        // createdAt: {
        //   type: Sequelize.DATE,
        //   defaultValue: Sequelize.literal('NOW()'),
        //   allowNull: false,
        // },
      },
    );
  },

  async down (queryInterface: QueryInterface) {
    await queryInterface.dropTable('banners');
  },
};
