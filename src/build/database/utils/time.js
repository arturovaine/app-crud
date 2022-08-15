"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.now = void 0;
const now = () => {
    const d = new Date();
    d.setHours(d.getHours() - 3);
    return d.toUTCString();
};
exports.now = now;
