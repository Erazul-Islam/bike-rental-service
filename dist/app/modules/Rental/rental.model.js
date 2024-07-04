"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RentalModel = void 0;
const mongoose_1 = require("mongoose");
const RentalSchema = new mongoose_1.Schema({
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
    }
}, {
    timestamps: true,
});
exports.RentalModel = (0, mongoose_1.model)('Rental', RentalSchema);
