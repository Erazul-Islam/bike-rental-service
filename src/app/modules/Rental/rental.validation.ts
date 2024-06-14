import { z } from 'zod';

const RentalValidationSchema = z.object({
    bikeId: z.string().optional(),
    userId: z.string().optional(),
    startTime: z.date(),
    returnTime: z.null().optional(),
    totalCost: z.number().optional(),
    isReturned: z.boolean().optional(),
});

export const RentalValidation = {
    RentalValidationSchema,
};
