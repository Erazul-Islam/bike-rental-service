"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseRawJsonMiddleware = (req, res, next) => {
    var _a;
    try {
        if ((_a = req.body) === null || _a === void 0 ? void 0 : _a.data) {
            req.body = Object.assign({}, JSON.parse(req.body.data));
        }
        next();
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Invalid JSON in request body",
        });
    }
};
exports.default = parseRawJsonMiddleware;
