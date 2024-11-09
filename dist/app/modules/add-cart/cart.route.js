"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartRouter = void 0;
const express_1 = __importDefault(require("express"));
const cart_controller_1 = require("./cart.controller");
const router = express_1.default.Router();
router.post('/:bikeId', cart_controller_1.cartController.AddtoCart);
router.get('/myCart', cart_controller_1.cartController.GetCart);
router.delete('/:id', cart_controller_1.cartController.DeleteCart);
exports.cartRouter = router;
