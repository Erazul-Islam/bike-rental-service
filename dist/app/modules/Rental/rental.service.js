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
exports.rentalService = void 0;
const config_1 = __importDefault(require("../../config"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const bike_model_1 = require("../bike/bike.model");
const user_model_1 = require("../user/user.model");
const rental_model_1 = require("./rental.model");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createRental = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    const bikeId = payload.bikeId;
    console.log(bikeId);
    const find = yield bike_model_1.BikeModel.findOne({ _id: bikeId });
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtAccessSecret);
    console.log(find);
    const bikeName = find === null || find === void 0 ? void 0 : find.name;
    console.log(bikeName);
    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }
    const finduser = yield user_model_1.User.findOne({ email: decoded.email });
    const userId = finduser === null || finduser === void 0 ? void 0 : finduser._id;
    const userName = finduser === null || finduser === void 0 ? void 0 : finduser.name;
    payload.userId = userId;
    payload.userName = userName;
    payload.bikeName = bikeName;
    // console.log(bikeName)
    if ((find === null || find === void 0 ? void 0 : find.isAvailable) === true) {
        const isAvailable = yield bike_model_1.BikeModel.updateOne({ _id: find }, { isAvailable: false });
        if (isAvailable) {
            const result = yield rental_model_1.RentalModel.create(payload);
            return result;
        }
    }
    else {
        throw new AppError_1.default(201, 'Bike is not available');
    }
});
const getAllRentalFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield rental_model_1.RentalModel.find();
    return result;
});
const ReturnedRental = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const find = yield rental_model_1.RentalModel.findOne({ _id: id });
    const bikeId = find === null || find === void 0 ? void 0 : find.bikeId;
    const bike = yield bike_model_1.BikeModel.findById({ _id: bikeId });
    const pricePerHour = bike === null || bike === void 0 ? void 0 : bike.pricePerHour;
    console.log('price per hour', pricePerHour);
    const isAvailable = yield bike_model_1.BikeModel.updateOne({ _id: bikeId }, { isAvailable: true });
    const startTime = (find === null || find === void 0 ? void 0 : find.startTime) ? new Date(find.startTime) : null;
    let returnTime = (find === null || find === void 0 ? void 0 : find.returnTime) ? new Date(find.returnTime) : null;
    if (startTime) {
        if (!returnTime) {
            returnTime = new Date();
        }
        const timeDifference = returnTime.getTime() - startTime.getTime();
        console.log('time difference', timeDifference);
        const hoursDifference = parseFloat((timeDifference / (1000 * 60 * 60)).toFixed(2));
        console.log('hourse difference', hoursDifference);
        if (pricePerHour && isAvailable) {
            const totalCost = pricePerHour * hoursDifference;
            console.log(totalCost);
            // console.log(`Time difference: ${hoursDifference} and totalCost is ${totalCost}`);
            const updatedRental = yield rental_model_1.RentalModel.findOneAndUpdate({ _id: id }, { $set: Object.assign(Object.assign({ isReturned: true, totalCost: totalCost }, payload), { returnTime: new Date() }) }, { new: true });
            return updatedRental;
        }
    }
});
const updateRentalPayement = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateIsPaid = yield rental_model_1.RentalModel.updateOne({ _id: id }, { isPaid: true });
        return updateIsPaid;
    }
    catch (error) {
        console.log(error);
    }
});
const getRental = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwtAccessSecret);
        if (typeof decoded === 'string' || !('email' in decoded)) {
            throw new Error('Invalid token structure');
        }
        const finduser = yield user_model_1.User.findOne({ email: decoded.email });
        const userId = finduser === null || finduser === void 0 ? void 0 : finduser._id;
        console.log(finduser, userId);
        const user = yield rental_model_1.RentalModel.find({ userId });
        if (!user) {
            throw new Error('User not found');
        }
        return user;
    }
    catch (error) {
        throw new Error('Invalid token');
    }
});
exports.rentalService = {
    createRental,
    ReturnedRental,
    getRental,
    getAllRentalFromDB,
    updateRentalPayement
};
