import config from "../../config"
import { User } from "../user/user.model"
import { TReview } from "./review.interface"
import { reviewModel } from "./review.model"
import jwt from 'jsonwebtoken'

const addReview = async (payload: TReview, token: string, id: string) => {
    const find = await User.findOne({ _id: id })
        console.log(find)

        const decoded = jwt.verify(token, config.jwtAccessSecret as string)
    
        if (typeof decoded === 'string' || !('email' in decoded)) {
            throw new Error('Invalid token structure');
        }

        const userName = find?.userName
        const userId = find?._id?.toString()
        const userImage = find?.userImage

        payload.userName = userName,
        payload.userId = userId,
        payload.userImage = userImage
    
        
    const result = await reviewModel.create(payload)
    return result
}

const getAllReviewFromDB = async () => {
    const result = await reviewModel.find()

    return result
}

const getSingleReviewFromDB = async (id: string) => {

    try {
        const result = await reviewModel.findOne({ _id: id })
        return result
    } catch (error) {
        console.log(error)
    }
}

const getReview = async (token: string) => {
    const decoded = jwt.verify(token, config.jwtAccessSecret as string)

    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }
    const finduser = await User.findOne({ email: decoded.email })
    const userId = finduser?._id

    const userReview = await reviewModel.find({ userId })

    if (!userReview) {
        throw new Error('User not found');
    }

    return userReview;
}

const deletedFromDB = async (id: string) => {
    const result = await reviewModel.deleteOne({ _id: id })
    return result
}

export const reviewService = {
    addReview,
    getAllReviewFromDB,
    getSingleReviewFromDB,
    deletedFromDB,
    getReview

}
