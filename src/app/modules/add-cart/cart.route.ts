import express from 'express'
import { cartController } from './cart.controller';


const router = express.Router();

router.post(
    '/:bikeId', cartController.AddtoCart
);
router.get(
    '/myCart', cartController.GetCart
);
router.delete(
    '/:id', cartController.DeleteCart
);

export const cartRouter = router