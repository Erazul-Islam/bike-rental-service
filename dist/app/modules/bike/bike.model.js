"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeModel = void 0;
const mongoose_1 = require("mongoose");
const photoSchema = new mongoose_1.Schema({
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const BikeSchema = new mongoose_1.Schema({
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
        type: [photoSchema],
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
}, {
    timestamps: true,
});
exports.BikeModel = (0, mongoose_1.model)('Bike', BikeSchema);
