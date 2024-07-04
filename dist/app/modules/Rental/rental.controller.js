"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const rental_service_1 = require("./rental.service");
const createRental = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    const result = yield rental_service_1.rentalService.createRental(req.body, token);
    res.status(200).json({
        success: true,
        message: "Rental created successfully",
        data: result,
    });
}));
const getUpdatedRental = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const rentalId = req.params.rentalId;
    const updatedData = req.body;
    try {
        const updatedBike = yield rental_service_1.rentalService.ReturnedRental(rentalId, updatedData);
        res.status(200).json({
            success: true,
            message: "Bike returned successfully",
            data: updatedBike,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getAllRental = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const token = (_b = req.headers.authorization) === null || _b === void 0 ? void 0 : _b.split(' ')[1];
    try {
        const result = yield rental_service_1.rentalService.getRental(token);
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Bikes retrieved successfully",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.rentalController = {
    createRental,
    getUpdatedRental,
    getAllRental
};
