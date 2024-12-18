import express from 'express'
import validateRequest from '../middleWares/validateRequest';
import { UserValidation } from './user.validation';
import { userController } from './user.controller';
import { multerUpload } from '../../config/multer.config';


const router = express.Router();

router.post(
    '/signup',
    multerUpload.single("image"),
    validateRequest(UserValidation.userValidationSchema),
    userController.signUpRegistration,
);

router.delete('/:userId', userController.deleteSingleUser)

router.get('/all-profile', userController.getAllProfile)

router.patch('/:userId', userController.getUpdatedUserRole)

router.get('/me',  userController.getProfile)

router.put('/me', multerUpload.single("image") , userController.getUpdatedUser)

export const userRoute = router