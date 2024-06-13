import express from 'express'
import validateRequest from '../middleWares/validateRequest';
import { UserValidation } from './user.validation';
import { userController } from './user.controller';


const router = express.Router();

router.post(
    '/signup',
    validateRequest(UserValidation.userValidationSchema),
    userController.signUpRegistration,
);

export const userRoute = router