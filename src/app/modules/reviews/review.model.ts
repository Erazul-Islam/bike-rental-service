import { Schema, model } from "mongoose";
import { TReview } from "./review.interface";

const reviewSchema = new Schema<TReview>(
    {
        userName: {
            type: String,
            required: true
        },
        userImage : {
            type : String,
            required : true
        },
        userId: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        star: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true,
    },
);

export const reviewModel = model<TReview>('Bike-Review', reviewSchema);