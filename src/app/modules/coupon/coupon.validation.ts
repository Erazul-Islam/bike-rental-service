import { z } from 'zod';

const CouponValidationSchema = z.object({
    code: z.string().optional(),
    discount: z.number().optional(),
});

export const CouponValidation = {
    CouponValidationSchema,
};
