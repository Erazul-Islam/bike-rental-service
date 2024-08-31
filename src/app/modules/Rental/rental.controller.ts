import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { rentalService } from "./rental.service"


const createRental = catchAsync(async (req: Request, res: Response) => {
    const token = req.headers.authorization?.split(' ')[1];

    const result = await rentalService.createRental(req.body, token as string)
    res.status(200).json({
        success: true,
        message: "Rental created successfully",
        data: result,
    })
})

const getUpdatedRental = async (req: Request, res: Response) => {
    const rentalId = req.params.rentalId
    const updatedData = req.body
    const discount = req.body.discount || 0;

    try {
        const updatedBike = await rentalService.ReturnedRental(rentalId, updatedData, discount)

        res.status(200).json({
            success: true,
            message: "Bike returned successfully",
            data: updatedBike,
        })
    } catch (err) {
        console.log(err)
    }
}

const updateRentalPayement = catchAsync(async (req: Request, res: Response) => {
    const result = await rentalService.updateRentalPayement(req.params.rentalId);
    res.status(200).json({
        success: true,
        message: "Bike updated successfully!",
        data: result
    });
});

const getAllRentalFromDB = async (req: Request, res: Response) => {

    try {
        const result = await rentalService.getAllRentalFromDB()
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Rental retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

const getAllRental = async (req: Request, res: Response) => {

    const token = req.headers.authorization?.split(' ')[1];

    try {
        const result = await rentalService.getRental(token as string)
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Rental retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

export const rentalController = {
    createRental,
    getUpdatedRental,
    getAllRental,
    getAllRentalFromDB,
    updateRentalPayement
}