"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkEnvironment = void 0;
const checkEnvironment = () => {
    const REQUIRED_VARIABLES = [
        'JWT_SECRET',
        'PASSWORD_SALT',
    ];
    REQUIRED_VARIABLES.forEach((value) => {
        if (!process.env[value]) {
            throw Error(`${value} must be defined in "/.env"`);
        }
    });
};
exports.checkEnvironment = checkEnvironment;
