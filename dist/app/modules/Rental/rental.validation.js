"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalValidation = void 0;
const zod_1 = require("zod");
const RentalValidationSchema = zod_1.z.object({
    bikeId: zod_1.z.string().optional(),
    userId: zod_1.z.string().optional(),
    startTime: zod_1.z.date().optional(),
    returnTime: zod_1.z.date().optional(),
    totalCost: zod_1.z.number().optional(),
    isReturned: zod_1.z.boolean().optional(),
    discountedTotalCost: zod_1.z.boolean().optional(),
    isPaid: zod_1.z.boolean().optional()
});
exports.RentalValidation = {
    RentalValidationSchema,
};
