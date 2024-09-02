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
exports.PayementService = void 0;
const Stripe = require('stripe');
const stripe = new Stripe(process.env.secret_Key);
const createPaymentIntent = (amount) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(amount);
    try {
        const paymentIntent = yield stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card'],
        });
        console.log(paymentIntent);
        return paymentIntent;
    }
    catch (error) {
        throw new Error('Error creating payment intent: ');
    }
});
const createFullPaymentIntent = (amount) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(amount);
    try {
        const paymentIntent = yield stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card'],
        });
        console.log(paymentIntent);
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
exports.PayementService = {
    createPaymentIntent, confirmPayment, createFullPaymentIntent
};
