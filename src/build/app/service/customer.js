"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("../../database/models/customer"));
const error_1 = require("../utils/error");
const create = async (customer) => {
    const customerExists = await customer_1.default.findOne({ where: { email: customer.email } });
    if (customerExists)
        throw error_1.ERRORS.CUSTOMER.ALREADY_TAKEN;
    await customer_1.default.create(customer);
    return (customer);
};
const findAll = async () => {
    const allCustomers = await customer_1.default.findAll();
    if (!allCustomers)
        throw error_1.ERRORS.CUSTOMER.NOT_FOUND;
    return allCustomers;
};
const findById = async (id) => {
    const response = await customer_1.default.findOne({ where: { id } });
    if (!response)
        throw error_1.ERRORS.CUSTOMER.NOT_FOUND;
    return (response);
};
const updateById = async (id, customer) => {
    const customerExists = await customer_1.default.findOne({ where: { id } });
    if (!customerExists)
        throw error_1.ERRORS.CUSTOMER.NOT_FOUND;
    const { name, email, phone, password } = customer;
    await customer_1.default.update({ name, email, phone, password }, { where: { id } });
    const updatedCustomer = await customer_1.default.findOne({ where: { id } });
    return updatedCustomer;
};
const deleteById = async (id) => {
    const response = await customer_1.default.findOne({ where: { id } });
    if (!response)
        throw error_1.ERRORS.CUSTOMER.NOT_FOUND;
    await customer_1.default.destroy({ where: { id } });
    return (response);
};
exports.default = {
    create,
    findAll,
    findById,
    updateById,
    deleteById,
};
