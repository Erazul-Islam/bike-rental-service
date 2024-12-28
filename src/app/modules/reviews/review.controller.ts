import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import { reviewService } from "./review.service"
import sendResponse from "../../utils/sendResponse"


const AddingReview = catchAsync(async (req: Request, res: Response) => {

    const result = await reviewService.addReview(req.body)

    sendResponse(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: 'Review added Successfully',
        data: result
    })
})

export const reviewController = {
    AddingReview
}