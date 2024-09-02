"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../middleWares/validateRequest"));
const coupon_validation_1 = require("./coupon.validation");
const coupon_controller_1 = require("./coupon.controller");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(coupon_validation_1.CouponValidation.CouponValidationSchema), coupon_controller_1.couponController.AddingCoupon);
router.get('/', coupon_controller_1.couponController.getAllCoupon);
router.delete('/:couponId', coupon_controller_1.couponController.deleteSingleCoupon);
router.put('/:couponId', coupon_controller_1.couponController.getUpdatedCoupon);
exports.CouponRoute = router;
