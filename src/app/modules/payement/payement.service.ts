import { PaymentModel } from "./payement.model";

const Stripe = require('stripe');
const stripe = new Stripe(process.env.secret_Key);

const createPaymentIntent = async ( amount: number) => {

    try {
        
        const payment = new PaymentModel({
           
            BDT: amount,
            status: 'pending'
        })

        console.log(payment)

        const savedPayment = await payment.save()

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount,
            currency: 'usd',
            payment_method_types: ['card'],
            metadata: {
                mongoPaymentId: savedPayment._id.toString(),
            },
        });

        console.log(paymentIntent)

        savedPayment.paymentIntentId = paymentIntent.id;
        await savedPayment.save();

        return paymentIntent;

    } catch (error: unknown) {

        throw new Error(`Error creating payment intent`);
    }
};
const createFullPaymentIntent = async (amount: number) => {

    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card'],
        });

        return paymentIntent;

    } catch (error) {
        throw new Error('Error creating payment intent: ');
    }
};

const confirmPayment = async (paymentIntentId: string, paymentMethodId: string) => {
    try {
        const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId, {
            payment_method: paymentMethodId,
        });
        return paymentIntent;
    } catch (error) {
        throw new Error('Error confirming payment: ');
    }
};


export const PayementService = {
    createPaymentIntent, confirmPayment, createFullPaymentIntent
}