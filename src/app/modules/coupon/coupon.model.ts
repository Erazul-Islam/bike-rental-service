import { Schema, model } from "mongoose";
import { TCoupon } from "./coupon.interface";



const CouponSchema = new Schema<TCoupon>(
    {
        code: {
            type: String,
            required: true
        },
        discount: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true,
    },
);

export const CouponModel = model<TCoupon>('coupon', CouponSchema);