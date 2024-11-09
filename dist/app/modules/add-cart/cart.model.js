"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartModel = void 0;
const mongoose_1 = require("mongoose");
const CartSchema = new mongoose_1.Schema({
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
        type: String,
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
exports.CartModel = (0, mongoose_1.model)('Bike-Cart', CartSchema);
