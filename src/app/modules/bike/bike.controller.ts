import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { BikeService } from "./bike.service"



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
const getSingleBike = async (req: Request, res: Response) => {

    const bikeId = req.params.bikeId

    try {
        const result = await BikeService.getSingleBikeFromDB(bikeId)
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
    console.log(updatedData)
    const imageFile = req.file

    try {

        const imageUrl = imageFile?.path
        console.log(imageUrl)

        const updatedBike = await BikeService.getUpdatedBikeFromDB(bikeId, updatedData,imageUrl)

        res.status(200).json({
            success: true,
            message: "Bike updated successfully!",
            data: updatedBike
        })
    } catch (err) {
        console.log(err)
    }
}


const updateBikeAvailability = catchAsync(async (req: Request, res: Response) => {
    const result = await BikeService.updateBikeAvailability(req.params.bikeId);
    res.status(200).json({
        success: true,
        message: "Bike updated successfully!",
        data: result
    });
});

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
    deleteSingleBike,
    getSingleBike,
    updateBikeAvailability,
}