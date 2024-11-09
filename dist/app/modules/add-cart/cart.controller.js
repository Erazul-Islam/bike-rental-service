"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const cart_service_1 = require("./cart.service");
const AddtoCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = req.params.bikeId;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    const result = yield cart_service_1.cartService.AddtoCart(req.body, token, id);
    res.status(200).json({
        success: true,
        message: "Add to cart successfully",
        data: result,
    });
}));
const GetCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const token = (_b = req.headers.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    const result = yield cart_service_1.cartService.getCart(token);
    res.status(200).json({
        success: true,
        message: "Cart retrived successfully",
        data: result,
    });
}));
const DeleteCart = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield cart_service_1.cartService.deleteCart(id);
    res.status(200).json({
        success: true,
        message: "Cart Deleted successfully",
        data: result,
    });
}));
exports.cartController = {
    AddtoCart,
    GetCart,
    DeleteCart
};
