"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    async up(queryInterface) {
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
    async down(queryInterface) {
        await queryInterface.bulkDelete('customers', {});
    },
};
