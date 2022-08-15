"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    async up(queryInterface) {
        await queryInterface.bulkInsert('banners', [
            {
                name: 'Banner-1',
                image: '../assets/images/banner1.png',
                customerID: '1',
                endAt: '2022-08-12',
                startAt: '2022-08-11',
                status: false,
            },
            {
                name: 'Banner-2',
                image: '../assets/images/banner2.png',
                customerID: '2',
                endAt: '2022-08-12',
                startAt: '2022-08-11',
                status: true,
            },
            {
                name: 'Banner-5',
                image: '../assets/images/banner5.png',
                customerID: '2',
                endAt: '2022-08-12',
                startAt: '2022-08-11',
                status: true,
            },
        ], {});
    },
    async down(queryInterface) {
        await queryInterface.bulkDelete('banners', { userId: 1 }, {});
    },
};
