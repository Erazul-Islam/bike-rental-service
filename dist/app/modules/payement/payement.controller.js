"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionHistoryController = exports.confirmPaymentController = exports.createFullPaymentIntentController = exports.createPaymentIntentController = void 0;
const payement_service_1 = require("./payement.service");
// import { createPaymentIntent, confirmPayment } from '../services/paymentService';
const createPaymentIntentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount } = req.body;
        if (!amount || amount <= 0) {
            return res.status(400).json({
                success: false,
                message: 'Invalid amount',
            });
        }
        const secret = yield payement_service_1.PayementService.createPaymentIntent(amount);
        console.log(secret);
        res.status(200).json({
            success: true,
            message: 'Payment intent created successfully',
            data: secret,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: `Error creating payment intent:`,
        });
    }
});
exports.createPaymentIntentController = createPaymentIntentController;
const createFullPaymentIntentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount } = req.body;
        if (!amount || amount <= 0) {
            return res.status(400).json({
                success: false,
                message: 'Invalid totalCost ',
            });
        }
        const secret = yield payement_service_1.PayementService.createFullPaymentIntent(amount);
        console.log(secret);
        res.status(200).json({
            success: true,
            message: 'Payment intent created successfully',
            data: secret
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: `Error creating payment intent:`,
        });
        console.log(error);
    }
});
exports.createFullPaymentIntentController = createFullPaymentIntentController;
const confirmPaymentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { paymentMethodId, clientSecret } = req.body;
        if (!paymentMethodId || !clientSecret) {
            return res.status(400).json({
                success: false,
                message: 'Missing payment method ID or client secret',
            });
        }
        const paymentIntent = yield payement_service_1.PayementService.confirmPayment(paymentMethodId, clientSecret);
        res.status(200).json({
            success: true,
            message: 'Payment confirmed successfully',
            data: paymentIntent,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: `Error confirming payment: `,
        });
    }
});
exports.confirmPaymentController = confirmPaymentController;
const transactionHistoryController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const transaction = yield payement_service_1.PayementService.getTransactionHistory(5);
        return res.status(200).json({
            success: true,
            data: transaction
        });
    }
    catch (_a) {
        res.status(500).json({
            success: false,
            message: `Error to get transaction history `,
        });
    }
});
exports.transactionHistoryController = transactionHistoryController;
