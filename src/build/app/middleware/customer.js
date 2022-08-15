"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("../schema/customer"));
const objectIsEmpty = (object) => (Object.entries(object).every(([, value]) => value === undefined));
const validateLogin = async (req, res, next) => {
    const { username, password } = req.body;
    const user = await customer_1.default.login.validateAsync({ username, password });
    res.locals.user = user;
    return next();
};
const validateFilter = async (req, res, next) => {
    const { id, username } = req.body;
    if (objectIsEmpty({ id, username }))
        return next();
    const filter = await customer_1.default.filter.validateAsync({ id, username });
    res.locals.filter = filter;
    return next();
};
const validateCreate = async (req, res, next) => {
    const { username, password } = req.body;
    const user = await customer_1.default.create.validateAsync({ username, password });
    res.locals.user = user;
    return next();
};
exports.default = {
    validateLogin,
    validateFilter,
    validateCreate,
};
