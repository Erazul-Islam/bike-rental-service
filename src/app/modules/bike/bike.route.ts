import express from 'express'
import validateRequest from '../middleWares/validateRequest';
import { BikeValidation } from './bike.validation';
import { bikeController } from './bike.controller';
import authValidation from '../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';
// import authValidation from '../middleWares/auth';

const router = express.Router();

router.post(
    '/',
    validateRequest(BikeValidation.BikeValidationSchema), authValidation(USER_ROLE.admin),
    bikeController.AddingBike,
);

router.put('/:bikeId', authValidation(USER_ROLE.admin), bikeController.getUpdatedBike)

router.delete('/:bikeId',authValidation(USER_ROLE.admin), bikeController.deleteSingleBike)

router.get('/', bikeController.getAllbike)

export const bikeRoute = router