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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayementService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const payement_model_1 = require("./payement.model");
const Stripe = require('stripe');
const stripe = new Stripe(process.env.secret_Key);
const createPaymentIntent = (amount) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = new payement_model_1.PaymentModel({
            BDT: amount,
            status: 'pending'
        });
        console.log(payment);
        const savedPayment = yield payment.save();
        const paymentIntent = yield stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            payment_method_types: ['card'],
            metadata: {
                mongoPaymentId: savedPayment._id.toString(),
            },
        });
        console.log(paymentIntent);
        savedPayment.paymentIntentId = paymentIntent.id;
        yield savedPayment.save();
        return paymentIntent;
    }
    catch (error) {
        throw new Error(`Error creating payment intent`);
    }
});
const createFullPaymentIntent = (amount) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentIntent = yield stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card'],
        });
        return paymentIntent;
    }
    catch (error) {
        throw new Error('Error creating payment intent: ');
    }
});
const confirmPayment = (paymentIntentId, paymentMethodId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentIntent = yield stripe.paymentIntents.confirm(paymentIntentId, {
            payment_method: paymentMethodId,
        });
        return paymentIntent;
    }
    catch (error) {
        throw new Error('Error confirming payment: ');
    }
});
const getTransactionHistory = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (limit = 5) {
    try {
        const paymentIntent = yield stripe.paymentIntents.list({
            limit: limit
        });
        return paymentIntent.data;
    }
    catch (_a) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'payment history not found');
    }
});
exports.PayementService = {
    createPaymentIntent, confirmPayment, createFullPaymentIntent, getTransactionHistory
};
