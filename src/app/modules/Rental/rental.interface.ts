import { Types } from "mongoose";

export type TRental = {
    bikeId: Types.ObjectId,
    userId: Types.ObjectId,
    startTime: Date,
    returnTime: null,
    totalCost: number,
    isReturned: false
};
