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
exports.cartService = void 0;
const config_1 = __importDefault(require("../../config"));
const bike_model_1 = require("../bike/bike.model");
const user_model_1 = require("../user/user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const cart_model_1 = require("./cart.model");
const AddtoCart = (payload, token, id) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield bike_model_1.BikeModel.findOne({ _id: id });
    console.log(find);
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtAccessSecret);
    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }
    const brand = find === null || find === void 0 ? void 0 : find.brand;
    const name = find === null || find === void 0 ? void 0 : find.name;
    const description = find === null || find === void 0 ? void 0 : find.description;
    const pricePerHour = find === null || find === void 0 ? void 0 : find.pricePerHour;
    const cc = find === null || find === void 0 ? void 0 : find.cc;
    const year = find === null || find === void 0 ? void 0 : find.cc;
    const model = find === null || find === void 0 ? void 0 : find.model;
    const isAvailable = find === null || find === void 0 ? void 0 : find.isAvailable;
    const finduser = yield user_model_1.User.findOne({ email: decoded.email });
    const userId = finduser === null || finduser === void 0 ? void 0 : finduser._id;
    const userEmail = finduser === null || finduser === void 0 ? void 0 : finduser.email;
    const image = find === null || find === void 0 ? void 0 : find.image;
    payload.userId = userId;
    payload.userEmail = userEmail;
    payload.brand = brand;
    payload.name = name;
    payload.description = description,
        payload.pricePerHour = pricePerHour;
    payload.cc = cc;
    payload.year = year;
    payload.model = model;
    payload.image = image;
    payload.isAvailable = isAvailable;
    const result = cart_model_1.CartModel.create(payload);
    return result;
});
const getCart = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtAccessSecret);
    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }
    const finduser = yield user_model_1.User.findOne({ email: decoded.email });
    const userId = finduser === null || finduser === void 0 ? void 0 : finduser._id;
    const userCart = yield cart_model_1.CartModel.find({ userId });
    if (!userCart) {
        throw new Error('User not found');
    }
    return userCart;
});
const deleteCart = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cart_model_1.CartModel.deleteOne({ _id: id });
    return result;
});
exports.cartService = {
    AddtoCart,
    getCart,
    deleteCart
};
