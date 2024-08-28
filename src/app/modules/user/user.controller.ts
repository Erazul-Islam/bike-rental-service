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

const getAllProfile = async (req: Request, res: Response) => {
    console.log(req.user)

    try {
        const result = await userService.getAllProfileFromDB()
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Profile retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

const getUpdatedUserRole = async (req: Request, res: Response) => {
    const userId = req.params.userId

    try {
        const updatedUserRole = await userService.getUpdatedUserRole(userId)

        if (!updatedUserRole) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        res.status(200).json({
            success: true,
            message: "User role updated successfully",
            data: updatedUserRole,
        })
    } catch (err) {
        console.log(err)
    }
}

const getProfile = async (req: Request, res: Response) => {
    try {

        const token = req.headers.authorization?.split(' ')[1]
        const result = await userService.getMyProfile(token as string)

        res.status(200).json({
            success: true,
            message: "User profile retrived successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

};

const getUpdatedUser = async (req: Request, res: Response) => {
    const token = req.headers.authorization?.split(' ')[1]
    const updatedData = req.body

    try {
        const updatedUser = await userService.getUpdatedUser(token as string, updatedData)
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

const deleteSingleUser = async (req: Request, res: Response) => {

    try {

        const userId = req.params.userId;

        const result = await userService.deletedFromDB(userId)
        res.status(200).json({
            success: true,
            message: "User deleted successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

}


export const userController = {
    signUpRegistration,
    getProfile,
    getUpdatedUser,
    getAllProfile,
    deleteSingleUser,
    getUpdatedUserRole
}