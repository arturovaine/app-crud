"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const banner_1 = __importDefault(require("../controller/banner"));
// import bannerMiddleware from '../middleware/banner';
// import authMiddleware from '../middleware/auth';
const bannerRouter = (0, express_1.Router)();
bannerRouter.route('/banner')
    .get(
// customerMiddleware.validateFilter,
// authMiddleware.validateToken,
banner_1.default.findAll)
    .post(
// customerMiddleware.validateCreate,
banner_1.default.create);
bannerRouter.route('/banner/:id')
    .get(
// customerMiddleware.validateFilter,
// authMiddleware.validateToken,
banner_1.default.findById)
    .put(
// customerMiddleware.validateCreate,
banner_1.default.updateById)
    .delete(
// customerMiddleware.validateCreate,
banner_1.default.deleteById);
exports.default = bannerRouter;
