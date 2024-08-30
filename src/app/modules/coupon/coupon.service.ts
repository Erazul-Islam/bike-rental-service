import { TCoupon } from "./coupon.interface"
import { CouponModel } from "./coupon.model"

const addCoupon = async (payload: TCoupon) => {
    const result = await CouponModel.create(payload)
    console.log(result)
    return result
}

const getAllCouponFromDB = async () => {
    const result = await CouponModel.find()
    return result
}

const deleteCouponFromDB = async (id: string) => {
    const result = await CouponModel.deleteOne({ _id: id })
    return result
}

const getUpdatedCouponFromDB = async (id: string, payload: Partial<TCoupon>) => {
    try {
        const updatedCoupon = await CouponModel.findOneAndUpdate({ _id: id }, payload, { new: true })
        return updatedCoupon
    } catch (error) {
        console.log(error)
    }
}

export const CouponService = {
    addCoupon,
    getAllCouponFromDB,
    deleteCouponFromDB,
    getUpdatedCouponFromDB
}