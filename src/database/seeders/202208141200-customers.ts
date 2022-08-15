import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('customers', [
      {
        name: 'Admin',
        email: 'admin@admin.com',
        phone: '(41) 912341234',
        password: 'HxtLjKPEZBuPW',
      },
      {
        name: 'João Silva',
        email: 'joao@email.com',
        phone: '(41) 943214326',
        password: 'HGJGHJsufdggf',
      },
    ], {});
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('customers', {});
  },
};
