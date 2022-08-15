"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const router_1 = __importDefault(require("./router"));
require("dotenv/config");
// const PORT = process.env.PORT || 3001;
const app = new index_1.App(router_1.default);
app.start();
