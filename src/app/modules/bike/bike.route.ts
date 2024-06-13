import express from 'express'
import validateRequest from '../middleWares/validateRequest';
import { BikeValidation } from './bike.validation';
import { bikeController } from './bike.controller';

const router = express.Router();

router.post(
    '/',
    validateRequest(BikeValidation.BikeValidationSchema),
    bikeController.AddingBike,
);

router.put('/:bikeId', bikeController.getUpdatedBike)

router.delete('/:bikeId', bikeController.deleteSingleBike)

router.get('/', bikeController.getAllbike)

export const bikeRoute = router