import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { authService } from "./auth.service";


const loginUser = catchAsync(async (req, res) => {
    const result = await authService.loginUser(req.body);

    const { RefressToken } = result

    res.cookie('refreshToken', RefressToken, {
        httpOnly: true
    })

    sendResponse(res, {
        statusCode: httpStatus.OK,
        status: 200,
        success: true,
        message: "User is logged in successfully",
        data: result
    })
})

export const authController = {
    loginUser
}