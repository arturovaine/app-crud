"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
// import { checkEnvironment } from './utils/app';
// import swaggerUi from 'swagger-ui-express';
// import swaggerTS from 'swagger-ts';
// import swaggerConfig from '../docs/swagger.config';
class App {
    router;
    app = (0, express_1.default)();
    swaggerDoc;
    constructor(router) {
        this.router = router;
        this.setup();
    }
    setup() {
        this.app.use((0, cors_1.default)()); // front
        this.app.use(express_1.default.json());
        this.app.use(this.router);
    }
    start() {
        // checkEnvironment();
        const APP_PORT = process.env.APP_PORT || 3001;
        this.app.listen(APP_PORT, () => console.log(`API is running at the port: ${APP_PORT}`));
    }
}
exports.App = App;
const app = new App(router_1.default);
exports.default = app;
app.start();
