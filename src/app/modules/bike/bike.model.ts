import { Schema, model } from "mongoose";
import { TBike, TImage } from "./bike.interface";

const photoSchema = new Schema<TImage>(
    {
        image : {
            type : String,
            required : true
        }
    },
    {
        timestamps : true
    }
)


const BikeSchema = new Schema<TBike>(
    {
        name: {
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
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        isAvailable:{
            type:Boolean,
            default:true
        }
    },
    {
        timestamps: true,
    },
);

export const BikeModel = model<TBike>('Bike', BikeSchema);