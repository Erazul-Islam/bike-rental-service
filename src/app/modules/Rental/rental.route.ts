import express from 'express'
import validateRequest from '../middleWares/validateRequest';
import { RentalValidation } from './rental.validation';
import { rentalController } from './rental.controller';

const router = express.Router();

router.post(
    '/create',
    validateRequest(RentalValidation.RentalValidationSchema),
    rentalController.createRental
);

export const rentalRoute = {
    router
}