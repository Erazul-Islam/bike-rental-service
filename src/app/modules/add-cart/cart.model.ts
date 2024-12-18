import { Schema, model } from "mongoose";
import { TCart } from "./cart.interface";



const CartSchema = new Schema<TCart>(
    {
        name: {
            type: String,
            required: true
        },
        userEmail: {
            type: String,
            required: true
        },
        userId: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        pricePerHour: {
            type: Number,
            required: true
        },
        cc: {
            type: Number,
            required: true
        },
        year: {
            type: Number,
            required: true
        },
        model: {
            type: String,
            required: true
        },
        image: {
            type: String ,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        isAvailable: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
    },
);

export const CartModel = model<TCart>('Bike-Cart', CartSchema);