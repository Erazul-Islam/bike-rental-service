import { Schema, Types, model } from "mongoose";
import { TRental } from "./rental.interface";


const RentalSchema = new Schema<TRental>(
    {
        bikeId: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            ref: 'User',
            required:false
        },
        startTime: {
            type: Date,
            required:false
        },
        returnTime: {
            type: Date,
            required:false,
            default:null
        },
        totalCost: {
            type: Number,
            required:false,
            default:0
        },
        isReturned: {
            type: Boolean,
            required:false,
            default: false
        }
    },
    {
        timestamps: true,
    },
);

export const RentalModel = model<TRental>('Rental', RentalSchema);
