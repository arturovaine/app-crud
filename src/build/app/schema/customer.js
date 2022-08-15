"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const login = joi_1.default.object({
    username: joi_1.default.string().required(),
    password: joi_1.default.string().required(),
});
const filter = joi_1.default.object({
    id: joi_1.default.number().min(1),
    username: joi_1.default.string(),
});
const create = joi_1.default.object({
    username: joi_1.default.string().min(6).required(),
    password: joi_1.default.string().min(6).required(),
});
exports.default = {
    login,
    filter,
    create,
};
