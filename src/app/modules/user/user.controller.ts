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

const getProfile = async (req: Request, res: Response) => {
    try {
        const _id = req.query._id

        const result = await userService.getMyProfile(_id as string);
        res.status(200).json({
            success: true,
            message: "User profile retrieved successfully",
            data: result,
        });
    } catch (error) {
        res.status(200).json({
            success: false,
            message: "Not found",
            error: error,
        });
    }
};

const getUpdatedUser = async (req: Request, res: Response) => {
    const id = req.params.id
    const updatedData = req.body

    try {
        const updatedUser = await userService.getUpdatedUser(id, updatedData)
        console.log(updatedUser)

        res.status(200).json({
            success: true,
            message: "user updated successfully!",
            data: updatedUser
        })
    } catch (err) {
        console.log(err)
    }
}


export const userController = {
    signUpRegistration,
    getProfile,
    getUpdatedUser
}