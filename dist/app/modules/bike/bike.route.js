"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bikeRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../middleWares/validateRequest"));
const bike_validation_1 = require("./bike.validation");
const bike_controller_1 = require("./bike.controller");
const auth_1 = __importDefault(require("../middleWares/auth"));
const user_constant_1 = require("../user/user.constant");
// import authValidation from '../middleWares/auth';
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(bike_validation_1.BikeValidation.BikeValidationSchema), (0, auth_1.default)(user_constant_1.USER_ROLE.admin), bike_controller_1.bikeController.AddingBike);
router.put('/:bikeId', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), bike_controller_1.bikeController.getUpdatedBike);
router.delete('/:bikeId', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), bike_controller_1.bikeController.deleteSingleBike);
router.get('/', bike_controller_1.bikeController.getAllbike);
exports.bikeRoute = router;
