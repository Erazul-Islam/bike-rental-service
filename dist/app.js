"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("./app/config/modules/student/student.route");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/v1/students', student_route_1.StudentRoute);
const getAcontroller = (req, res) => {
    const a = 10;
    res.send(a);
};
app.get('/');
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
exports.default = app;
