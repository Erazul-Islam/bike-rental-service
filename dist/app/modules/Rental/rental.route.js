"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalRoute = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../middleWares/validateRequest"));
const rental_validation_1 = require("./rental.validation");
const rental_controller_1 = require("./rental.controller");
const auth_1 = __importDefault(require("../middleWares/auth"));
const user_constant_1 = require("../user/user.constant");
const router = express_1.default.Router();
router.post('/', (0, validateRequest_1.default)(rental_validation_1.RentalValidation.RentalValidationSchema), (0, auth_1.default)(user_constant_1.USER_ROLE.user), rental_controller_1.rentalController.createRental);
router.put('/:rentalId/return', (0, auth_1.default)(user_constant_1.USER_ROLE.admin), rental_controller_1.rentalController.getUpdatedRental);
router.get('/', rental_controller_1.rentalController.getAllRental);
exports.rentalRoute = router;
