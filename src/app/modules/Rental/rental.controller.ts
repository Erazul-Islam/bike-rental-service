import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { rentalService } from "./rental.service"
import sendResponse from "../../utils/sendResponse"


const createRental = catchAsync(async (req: Request, res: Response) => {
    const result = await rentalService.createRental(req.body)
    sendResponse(res, {
        statusCode: 201,
        status: 201,
        success: true,
        message: 'User Registration Successfully',
        data: result
    })
})

export const rentalController = {
    createRental
}