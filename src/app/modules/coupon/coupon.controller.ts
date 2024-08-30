import { Request, Response } from "express"
import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { CouponService } from "./coupon.service"

const AddingCoupon = catchAsync(async (req: Request, res: Response) => {
    const result = await CouponService.addCoupon(req.body)
    console.log(result)
    sendResponse(res, {
        statusCode: 200,
        status: 200,
        success: true,
        message: 'Coupon added Successfully',
        data: result
    })
})

const getAllCoupon = async (req: Request, res: Response) => {

    try {
        const result = await CouponService.getAllCouponFromDB()
        res.status(200).json({
            statusCode: 200,
            status: 200,
            success: true,
            message: "Coupon retrieved successfully",
            data: result
        })
    } catch (err) {
        console.log(err)
    }
}

const deleteSingleCoupon = async (req: Request, res: Response) => {

    try {

        const couponId = req.params.couponId;

        const result = await CouponService.deleteCouponFromDB(couponId)
        res.status(200).json({
            success: true,
            message: "Bike deleted successfully!",
            data: result
        })
    } catch (err) {
        console.log(err)
    }

}

const getUpdatedCoupon = async (req: Request, res: Response) => {
    const couponId = req.params.couponId
    const updatedData = req.body

    try {
        const updatedCoupon = await CouponService.getUpdatedCouponFromDB(couponId, updatedData)

        res.status(200).json({
            success: true,
            message: "Coupon updated successfully!",
            data: updatedCoupon
        })
    } catch (err) {
        console.log(err)
    }
}

export const couponController = {
    AddingCoupon,
    getAllCoupon,
    deleteSingleCoupon,
    getUpdatedCoupon
}