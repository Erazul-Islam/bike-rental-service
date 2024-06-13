import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { BikeService } from "./bike.service"
import { BikeModel } from "./bike.model"


const AddingBike = catchAsync(async (req: Request, res: Response) => {
    const result = await BikeService.addBike(req.body)
    sendResponse(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: 'Bike added Successfully',
        data: result
    })
})

const getAllbike = async (req: Request, res: Response) => {

    try {
        const result = await BikeService.getAllBikeFromDB()
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Bikes retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

const getUpdatedBike = async (req: Request, res: Response) => {
    const bikeId = req.params.bikeId
    const updatedData = req.body

    try {
        const updatedBike = await BikeService.getUpdatedBikeFromDB(bikeId, updatedData)
        console.log(updatedBike)

        res.status(200).json({
            success: true,
            message: "Bike updated successfully!",
            data: updatedBike
        })
    } catch (err) {
        console.log(err)
    }
}

const deleteSingleBike = async (req: Request, res: Response) => {

    try {

        const bikeId = req.params.bikeId;

        const result = await BikeService.deletedFromDB(bikeId)
        res.status(200).json({
            success: true,
            message: "Bike deleted successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

}

export const bikeController = {
    AddingBike,
    getAllbike,
    getUpdatedBike,
    deleteSingleBike
}