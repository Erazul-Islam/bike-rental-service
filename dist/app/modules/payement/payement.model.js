"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentModel = void 0;
const mongoose_1 = require("mongoose");
const BikePayment = new mongoose_1.Schema({
    name: { type: String, },
    email: { type: String, },
    BDT: { type: Number, },
    paymentIntentId: { type: String },
    status: { type: String, default: 'pending' },
}, {
    timestamps: true,
});
exports.PaymentModel = (0, mongoose_1.model)('bike_Payment', BikePayment);
