"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CouponValidation = void 0;
const zod_1 = require("zod");
const CouponValidationSchema = zod_1.z.object({
    code: zod_1.z.string().optional(),
    discount: zod_1.z.number().optional(),
});
exports.CouponValidation = {
    CouponValidationSchema,
};
