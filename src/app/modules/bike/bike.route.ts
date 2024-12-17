import express from 'express'
import validateRequest from '../middleWares/validateRequest';
import { BikeValidation } from './bike.validation';
import { bikeController } from './bike.controller';
import authValidation from '../middleWares/auth';
import { USER_ROLE } from '../user/user.constant';
import { multerUpload } from '../../config/multer.config';
// import authValidation from '../middleWares/auth';

const router = express.Router();

router.post(
    '/',
    validateRequest(BikeValidation.BikeValidationSchema), authValidation(USER_ROLE.admin),
    multerUpload.single('image'),
    bikeController.AddingBike,
);

router.put('/:bikeId', authValidation(USER_ROLE.admin), bikeController.getUpdatedBike)

router.delete('/:bikeId',authValidation(USER_ROLE.admin), bikeController.deleteSingleBike)

router.patch("/:bikeId/availability", bikeController.updateBikeAvailability);
router.get('/', bikeController.getAllbike)
router.get('/:bikeId', bikeController.getSingleBike)

export const bikeRoute = router