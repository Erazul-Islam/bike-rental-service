import { z } from 'zod';

const BikeValidationSchema = z.object({
        name: z.string().optional(),
        description: z.string().optional(),
        pricePerHour: z.number().optional(),
        cc: z.number().optional(),
        year: z.number().optional(),
        model:z.string().optional(),
        brand:z.string().optional(),
        image:z.string().optional(),
        isAvailable:z.boolean().optional()
});

export const BikeValidation = {
    BikeValidationSchema,
};
