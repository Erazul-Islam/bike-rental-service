"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const userNameSchema = new mongoose_1.Schema({
    firstName: {
        type: String
    },
    middleName: {
        type: String
    },
    lastName: {
        type: String,
    }
});
const StudentSchema = new mongoose_1.Schema({
    id: { type: String },
    name: userNameSchema,
    gender: ['Female', 'Male'],
    dateOfBirth: { type: String },
    email: { type: String, required: true },
    contractNum: { type: String, required: true },
    emergencyContact: { type: String, required: true },
    bloodGroup: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    presentAdd: { type: String, required: true },
    permanentAdd: { type: String, required: true },
    profileString: String,
    isActive: ['Active', 'InActive']
});
exports.StudentModel = (0, mongoose_1.model)('Student', StudentSchema);
