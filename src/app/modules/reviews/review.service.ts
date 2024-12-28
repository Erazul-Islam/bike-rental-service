import { TReview } from "./review.interface"
import { reviewModel } from "./review.model"

const addReview = async (payload: TReview) => {
    const result = await reviewModel.create(payload)
    return result
}

export const reviewService = {
    addReview
}