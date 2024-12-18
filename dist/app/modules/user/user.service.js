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
exports.userService = void 0;
const user_model_1 = require("./user.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const signUp = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.create(payload);
    return result;
});
const getAllProfileFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find();
    return result;
});
const getMyProfile = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtAccessSecret);
        if (typeof decoded === 'string' || !('email' in decoded)) {
            throw new Error('Invalid token structure');
        }
        const userEmail = decoded.email;
        const user = yield user_model_1.User.findOne({ email: userEmail });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    catch (error) {
        throw new Error('Invalid token');
    }
});
const getUpdatedUserRole = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_model_1.User.findById(id);
        console.log('user id', user);
        // If user is not found, throw an error
        if (!user) {
            throw new Error('User not found');
        }
        console.log(user.role);
        // If the user's role is already admin, prevent the update
        if (user.role === 'admin') {
            throw new Error('Cannot change role of an admin');
        }
        const updatedProduct = yield user_model_1.User.findOneAndUpdate({ _id: id }, { role: 'admin' }, { new: true });
        console.log('service', updatedProduct);
        return updatedProduct;
    }
    catch (error) {
        console.log(error);
    }
});
const getUpdatedUser = (token, payload, imageUrl) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtAccessSecret);
        if (typeof decoded === 'string' || !('email' in decoded)) {
            throw new Error('Invalid token structure');
        }
        if (imageUrl) {
            payload.image = imageUrl;
        }
        const userEmail = decoded.email;
        const updatedUser = yield user_model_1.User.findOneAndUpdate({ email: userEmail }, payload, { new: true });
        return updatedUser;
    }
    catch (error) {
        console.log(error);
    }
});
const deletedFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.deleteOne({ _id: id });
    return result;
});
exports.userService = {
    signUp,
    getMyProfile,
    getUpdatedUser,
    getAllProfileFromDB,
    deletedFromDB,
    getUpdatedUserRole
};
