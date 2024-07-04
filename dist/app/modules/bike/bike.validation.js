"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeValidation = void 0;
const zod_1 = require("zod");
const BikeValidationSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    pricePerHour: zod_1.z.number().optional(),
    cc: zod_1.z.number().optional(),
    year: zod_1.z.number().optional(),
    model: zod_1.z.string().optional(),
    brand: zod_1.z.string().optional(),
    isAvailable: zod_1.z.boolean().optional()
});
exports.BikeValidation = {
    BikeValidationSchema,
};
