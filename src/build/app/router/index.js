"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
require("express-async-errors");
const customer_1 = __importDefault(require("./customer"));
const banner_1 = __importDefault(require("./banner"));
const error_1 = __importDefault(require("../middleware/error"));
const appRouter = (0, express_1.Router)();
appRouter.use(customer_1.default);
appRouter.use(banner_1.default);
appRouter.use(error_1.default);
exports.default = appRouter;
