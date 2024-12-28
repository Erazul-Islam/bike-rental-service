import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { reviewService } from "./review.service"
import sendResponse from "../../utils/sendResponse"


const AddingReview = catchAsync(async (req: Request, res: Response) => {

    const id = req.params.userId
    const token = req.headers.authorization?.split(' ')[1];

    const result = await reviewService.addReview(req.body,token as string, id)

    sendResponse(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: 'Review added Successfully',
        data: result
    })
})

const getAllReview = async (req: Request, res: Response) => {

    try {
        const result = await reviewService.getAllReviewFromDB()
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Review retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}
const getSingleReview = async (req: Request, res: Response) => {

    const reviewId = req.params.bikeId

    try {
        const result = await reviewService.getSingleReviewFromDB(reviewId)
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Review retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

const GetReview = catchAsync(async (req: Request, res: Response) => {

    const token = req.headers.authorization?.split(' ')[1];

    const result = await reviewService.getReview( token as string)
    res.status(200).json({
        success: true,
        message: "User review retrived successfully",
        data: result,
    })
})

export const reviewController = {
    AddingReview,
    getAllReview,
    getSingleReview,
    GetReview
}