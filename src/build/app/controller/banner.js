"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const banner_1 = __importDefault(require("../service/banner"));
const create = async (req, res) => {
    const { name, image, customerID, endAt, startAt, status } = req.body;
    const newBanner = { name, image, customerID, endAt, startAt, status };
    await banner_1.default.create(newBanner);
    return res.status(201).json(newBanner);
};
const findById = async (req, res) => {
    const { id } = req.params;
    const foundBanner = await banner_1.default.findById(id);
    return res.status(200).json(foundBanner);
};
const findAll = async (_req, res) => {
    const allBanners = await banner_1.default.findAll();
    return res.status(200).json(allBanners);
};
const updateById = async (req, res) => {
    const { id } = req.params;
    const { name, image, customerID, endAt, startAt, status } = req.body;
    const customer = { name, image, customerID, endAt, startAt, status };
    const updatedCustomer = await banner_1.default.updateById(id, customer);
    return res.status(200).json(updatedCustomer);
};
const deleteById = async (req, res) => {
    const { id } = req.params;
    const foundBanner = await banner_1.default.findById(id);
    await banner_1.default.deleteById(id);
    return res.status(200).json(foundBanner);
};
exports.default = {
    create,
    findById,
    findAll,
    updateById,
    deleteById,
};
