import httpStatus from "http-status"
import sendResponse from "../../utils/sendResponse"
import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { userService } from "./user.service"

const signUpRegistration = catchAsync(async (req: Request, res: Response) => {
    const result = await userService.signUp(req.body)
    sendResponse(res, {
        statusCode: 201,
        status: 201,
        success: true,
        message: 'User Registration Successfully',
        data: result
    })
})


export const userController = {
    signUpRegistration
}