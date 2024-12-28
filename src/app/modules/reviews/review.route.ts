import express from 'express'
import { reviewController } from './review.controller';

const router = express.Router();

router.post(
    '/',
    reviewController.AddingReview,
);
router.get(
    '/',
    reviewController.getAllReview,
);
router.get(
    '/:reviewId',
    reviewController.getSingleReview,
);
router.get(
    '/my-review',
    reviewController.GetReview,
);

export const bikeRoute = router