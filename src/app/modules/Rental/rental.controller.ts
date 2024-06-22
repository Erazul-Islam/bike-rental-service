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
        message: 'Rental created successfully',
        data: result
    })
})

const getUpdatedRental = async (req: Request, res: Response) => {
    const rentalId = req.params.rentalId
    const updatedData = req.body

    try {
        const updatedBike = await rentalService.ReturnedRental(rentalId, updatedData)

        res.status(200).json({
            success: true,
            message: "Bike returned successfully",
            data: updatedBike
        })
    } catch (err) {
        console.log(err)
    }
}

export const rentalController = {
    createRental,
    getUpdatedRental
}