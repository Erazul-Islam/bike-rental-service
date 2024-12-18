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
exports.bikeController = void 0;
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const bike_service_1 = require("./bike.service");
const AddingBike = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log("file", req.file);
    console.log(req.body);
    const result = yield bike_service_1.BikeService.addBike(Object.assign(Object.assign({}, JSON.parse(req.body.data)), { image: (_a = req.file) === null || _a === void 0 ? void 0 : _a.path }));
    (0, sendResponse_1.default)(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: 'Bike added Successfully',
        data: result
    });
}));
const getAllbike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield bike_service_1.BikeService.getAllBikeFromDB();
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
const getSingleBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikeId = req.params.bikeId;
    try {
        const result = yield bike_service_1.BikeService.getSingleBikeFromDB(bikeId);
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
const getUpdatedBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikeId = req.params.bikeId;
    const updatedData = req.body;
    try {
        const updatedBike = yield bike_service_1.BikeService.getUpdatedBikeFromDB(bikeId, updatedData);
        res.status(200).json({
            success: true,
            message: "Bike updated successfully!",
            data: updatedBike
        });
    }
    catch (err) {
        console.log(err);
    }
});
const updateBikeAvailability = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_service_1.BikeService.updateBikeAvailability(req.params.bikeId);
    res.status(200).json({
        success: true,
        message: "Bike updated successfully!",
        data: result
    });
}));
const deleteSingleBike = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bikeId = req.params.bikeId;
        const result = yield bike_service_1.BikeService.deletedFromDB(bikeId);
        res.status(200).json({
            success: true,
            message: "Bike deleted successfully!",
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.bikeController = {
    AddingBike,
    getAllbike,
    getUpdatedBike,
    deleteSingleBike,
    getSingleBike,
    updateBikeAvailability,
};
