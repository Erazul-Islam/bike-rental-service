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
exports.StudentController = void 0;
const student_service_1 = require("./student.service");
const createStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = req.body;
        const result = yield student_service_1.studentService.createStudentIntoDB(student);
        // will call service function to send the data
        res.status(200).json({
            success: true,
            message: 'Student is created successfully',
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getAllStudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.studentService.getAllStudentfomDB();
        res.status(200).json({
            success: true,
            message: 'Student are retrived successfully',
            data: result
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.StudentController = {
    createStudent,
    getAllStudents
};
