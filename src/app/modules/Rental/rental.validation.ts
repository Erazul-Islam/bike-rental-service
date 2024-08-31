import { z } from 'zod';

const RentalValidationSchema = z.object({
    bikeId: z.string().optional(),
    userId: z.string().optional(),
    startTime: z.date().optional(),
    returnTime: z.date().optional(),
    totalCost: z.number().optional(),
    isReturned: z.boolean().optional(),
    discountedTotalCost: z.boolean().optional(),
    isPaid: z.boolean().optional()
});

export const RentalValidation = {
    RentalValidationSchema,
};
