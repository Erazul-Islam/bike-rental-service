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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeService = void 0;
const bike_model_1 = require("./bike.model");
const addBike = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const result = yield bike_model_1.BikeModel.create(payload);
    return result;
});
const getAllBikeFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.BikeModel.find();
    return result;
});
const getUpdatedBikeFromDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield bike_model_1.BikeModel.findOneAndUpdate({ _id: id }, payload, { new: true });
        return updatedProduct;
    }
    catch (error) {
        console.log(error);
    }
});
const updateBikeAvailability = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedBike = yield bike_model_1.BikeModel.updateOne({ _id: id }, { isAvailable: false });
        return updatedBike;
    }
    catch (error) {
        console.log(error);
    }
});
const getSingleBikeFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProduct = yield bike_model_1.BikeModel.findOne({ _id: id });
        return updatedProduct;
    }
    catch (error) {
        console.log(error);
    }
});
const deletedFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield bike_model_1.BikeModel.deleteOne({ _id: id });
    return result;
});
exports.BikeService = {
    addBike,
    getAllBikeFromDB,
    getUpdatedBikeFromDB,
    deletedFromDB,
    getSingleBikeFromDB,
    updateBikeAvailability
};
