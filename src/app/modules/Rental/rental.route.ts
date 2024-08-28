import express from 'express'
import validateRequest from '../middleWares/validateRequest';
import { RentalValidation } from './rental.validation';
import { rentalController } from './rental.controller';
import authValidation from '../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';

const router = express.Router();

router.post(
    '/',
    validateRequest(RentalValidation.RentalValidationSchema),authValidation(USER_ROLE.user),
    rentalController.createRental
);

router.put('/:rentalId/return', authValidation(USER_ROLE.admin), rentalController.getUpdatedRental)

router.patch("/:rentalId", rentalController.updateRentalPayement);

router.get('/', rentalController.getAllRental)

router.get('/all-rental', rentalController.getAllRentalFromDB)

export const rentalRoute = router