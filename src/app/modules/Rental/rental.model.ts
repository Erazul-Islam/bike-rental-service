import { Schema, Types, model } from "mongoose";
import { TRental } from "./rental.interface";


const RentalSchema = new Schema<TRental>(
    {
        bikeId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Bike"
        },
        userId: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        },
        startTime: {
            type: Date,
            required: true
        },
        returnTime: {
            type: null
        },
        totalCost: {
            type: Number,
            required: true
        },
        isReturned: {
            type: Boolean,
            default: false
        }

    },
    {
        timestamps: true,
    },
);

export const RentalModel = model<TRental>('Rental', RentalSchema);