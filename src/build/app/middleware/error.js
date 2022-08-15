"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const error = (err, _req, res, _next) => {
    if (err.isExpected) {
        const { status, message } = err;
        return res.status(status).json({ message });
    }
    if (err.isJoi) {
        const { message } = err.details[0];
        return res.status(400).json({ message });
    }
    console.error(err);
    return res.status(500).end();
};
exports.default = error;
