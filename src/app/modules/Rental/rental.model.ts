import { Schema, Types, model } from "mongoose";
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
            ref: 'User',
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
        }
    },
    {
        timestamps: true,
    },
);

export const RentalModel = model<TRental>('Rental', RentalSchema);
