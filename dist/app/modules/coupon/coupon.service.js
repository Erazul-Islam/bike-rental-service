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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponService = void 0;
const coupon_model_1 = require("./coupon.model");
const addCoupon = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coupon_model_1.CouponModel.create(payload);
    console.log(result);
    return result;
});
const getAllCouponFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coupon_model_1.CouponModel.find();
    return result;
});
const deleteCouponFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coupon_model_1.CouponModel.deleteOne({ _id: id });
    return result;
});
const getUpdatedCouponFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedCoupon = yield coupon_model_1.CouponModel.findOneAndUpdate({ _id: id }, payload, { new: true });
        return updatedCoupon;
    }
    catch (error) {
        console.log(error);
    }
});
exports.CouponService = {
    addCoupon,
    getAllCouponFromDB,
    deleteCouponFromDB,
    getUpdatedCouponFromDB
};
