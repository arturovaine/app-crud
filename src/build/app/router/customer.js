"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_1 = __importDefault(require("../controller/customer"));
// import customerMiddleware from '../middleware/customer';
// import authMiddleware from '../middleware/auth';
const customerRouter = (0, express_1.Router)();
customerRouter.route('/customer')
    .get(
// customerMiddleware.validateFilter,
// authMiddleware.validateToken,
customer_1.default.findAll)
    .post(
// customerMiddleware.validateCreate,
customer_1.default.create);
customerRouter.route('/customer/:id')
    .get(
// customerMiddleware.validateFilter,
// authMiddleware.validateToken,
customer_1.default.findById)
    .put(
// customerMiddleware.validateCreate,
customer_1.default.updateById)
    .delete(
// customerMiddleware.validateCreate,
customer_1.default.deleteById);
exports.default = customerRouter;
