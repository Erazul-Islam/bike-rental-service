"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.payemtRoute = void 0;
const express_1 = __importDefault(require("express"));
const payement_controller_1 = require("./payement.controller");
const router = express_1.default.Router();
router.post('/create-payment-intent', payement_controller_1.createPaymentIntentController);
router.post('/create-full-payment-intent', payement_controller_1.createFullPaymentIntentController);
router.post('/confirm-payment', payement_controller_1.confirmPaymentController);
exports.payemtRoute = router;
