import express from 'express'
import validateRequest from '../middleWares/validateRequest';
import { CouponValidation } from './coupon.validation';
import { couponController } from './coupon.controller';

const router = express.Router();


router.post(
    '/',
    validateRequest(CouponValidation.CouponValidationSchema),
    couponController.AddingCoupon,
);

router.get('/', couponController.getAllCoupon)

router.delete('/:couponId', couponController.deleteSingleCoupon)

router.put('/:couponId', couponController.getUpdatedCoupon)

export const CouponRoute = router