"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const banner_1 = __importDefault(require("../../database/models/banner"));
const customer_1 = __importDefault(require("../../database/models/customer"));
const error_1 = require("../utils/error");
const create = async (banner) => {
    const { customerID } = banner;
    const customerExists = await customer_1.default.findOne({ where: { id: customerID } });
    if (!customerExists)
        throw error_1.ERRORS.CUSTOMER.NOT_FOUND;
    const { endAt, startAt } = banner;
    const condition = Date.parse(endAt) - Date.parse(startAt);
    if (condition < 0)
        throw error_1.ERRORS.BANNER.INCORRECT_DATES;
    await banner_1.default.create(banner);
    return (banner);
};
const findAll = async () => {
    const allBanners = await banner_1.default.findAll();
    if (!allBanners)
        throw error_1.ERRORS.BANNER.NOT_FOUND;
    return allBanners;
};
const findById = async (id) => {
    const response = await banner_1.default.findOne({ where: { id } });
    if (!response)
        throw error_1.ERRORS.BANNER.NOT_FOUND;
    return (response);
};
const updateById = async (id, banner) => {
    const bannerExists = await banner_1.default.findOne({ where: { id } });
    if (!bannerExists)
        throw error_1.ERRORS.BANNER.NOT_FOUND;
    const { name, image, customerID, endAt, startAt, status } = banner;
    await banner_1.default.update({ name, image, customerID, endAt, startAt, status }, { where: { id } });
    const updatedCustomer = await banner_1.default.findOne({ where: { id } });
    return updatedCustomer;
};
const deleteById = async (id) => {
    const response = await banner_1.default.findOne({ where: { id } });
    if (!response)
        throw error_1.ERRORS.BANNER.NOT_FOUND;
    await banner_1.default.destroy({ where: { id } });
    return (response);
};
exports.default = {
    create,
    findAll,
    findById,
    updateById,
    deleteById,
};
