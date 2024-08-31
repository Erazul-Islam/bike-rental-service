import { Schema, model } from "mongoose";
import { TRental } from "./rental.interface";


const RentalSchema = new Schema<TRental>(
    {
        bikeId: {
            type: String,
            required: true,
            ref: 'Bike'
        },
        userId: {
            type: String,
            required: false
        },
        startTime: {
            type: String,
            required: true
        },
        returnTime: {
            type: Date,
            default: null
        },
        totalCost: {
            type: Number,
            required: false,
            default: 0
        },
        isReturned: {
            type: Boolean,
            required: false,
            default: false
        },
        isPaid: {
            type: Boolean,
            required: false,
            default: false
        },
        discountedTotalCost: {
            type: Number,
            required: false,
            default: 0
        }
    },
    {
        timestamps: true,
    },
);

export const RentalModel = model<TRental>('Rental', RentalSchema);
