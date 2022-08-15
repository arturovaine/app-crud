"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("../service/customer"));
const create = async (req, res) => {
    const { name, email, phone, password } = req.body;
    const customer = { name, email, phone, password };
    const newCustomer = await customer_1.default.create(customer);
    return res.status(201).json(newCustomer);
};
const findById = async (req, res) => {
    const { id } = req.params;
    const foundCustomer = await customer_1.default.findById(id);
    return res.status(200).json(foundCustomer);
};
const findAll = async (_req, res) => {
    const allCustomers = await customer_1.default.findAll();
    return res.status(200).json(allCustomers);
};
const updateById = async (req, res) => {
    const { id } = req.params;
    const { customer } = req.body;
    const updatedCustomer = await customer_1.default.updateById(id, customer);
    return res.status(200).json(updatedCustomer);
};
const deleteById = async (req, res) => {
    const { id } = req.params;
    const foundCustomer = await customer_1.default.findById(id);
    await customer_1.default.deleteById(id);
    return res.status(200).json(foundCustomer);
};
exports.default = {
    create,
    findById,
    findAll,
    updateById,
    deleteById,
};
