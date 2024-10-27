import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { cartService } from "./cart.service";


const AddtoCart = catchAsync(async (req: Request, res: Response) => {
    const id = req.params.bikeId
    const token = req.headers.authorization?.split(' ')[1];

    const result = await cartService.AddtoCart(req.body, token as string, id)
    res.status(200).json({
        success: true,
        message: "Add to cart successfully",
        data: result,
    })
})

const GetCart = catchAsync(async (req: Request, res: Response) => {

    const token = req.headers.authorization?.split(' ')[1];

    const result = await cartService.getCart( token as string)
    res.status(200).json({
        success: true,
        message: "Cart retrived successfully",
        data: result,
    })
})
const DeleteCart = catchAsync(async (req: Request, res: Response) => {

   const id = req.params.id

    const result = await cartService.deleteCart( id)
    res.status(200).json({
        success: true,
        message: "Cart Deleted successfully",
        data: result,
    })
})

export const cartController = {
    AddtoCart,
    GetCart,
    DeleteCart
}