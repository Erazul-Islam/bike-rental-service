import { Schema, model } from "mongoose";

import { TPayment } from "./payment.interface";


const BikePayment = new Schema<TPayment>(
    {
        name: { type: String, },
        email: { type: String, },
        BDT: { type: Number, },
        paymentIntentId: { type: String },
        status: { type: String, default: 'pending' },
    },
    {
        timestamps: true,
    },
);

export const PaymentModel = model<TPayment>('bike_Payment', BikePayment);
