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
exports.couponController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const coupon_service_1 = require("./coupon.service");
const AddingCoupon = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield coupon_service_1.CouponService.addCoupon(req.body);
    console.log(result);
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: 'Coupon added Successfully',
        data: result
    });
}));
const getAllCoupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield coupon_service_1.CouponService.getAllCouponFromDB();
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Coupon retrieved successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteSingleCoupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const couponId = req.params.couponId;
        const result = yield coupon_service_1.CouponService.deleteCouponFromDB(couponId);
        res.status(200).json({
            success: true,
            message: "Bike deleted successfully!",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getUpdatedCoupon = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const couponId = req.params.couponId;
    const updatedData = req.body;
    try {
        const updatedCoupon = yield coupon_service_1.CouponService.getUpdatedCouponFromDB(couponId, updatedData);
        res.status(200).json({
            success: true,
            message: "Coupon updated successfully!",
            data: updatedCoupon
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.couponController = {
    AddingCoupon,
    getAllCoupon,
    deleteSingleCoupon,
    getUpdatedCoupon
};
