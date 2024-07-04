import { TBike } from "./bike.interface"
import { BikeModel } from "./bike.model"


const addBike = async (payload: TBike) => {
    const result = await BikeModel.create(payload)
    return result
}

const getAllBikeFromDB = async () => {
    const result = await BikeModel.find()
    return result
}

const getUpdatedBikeFromDB = async (id: string, payload: Partial<TBike>) => {
    try {
        const updatedProduct = await BikeModel.findOneAndUpdate({ _id: id }, payload, { new: true })
        return updatedProduct
    } catch (error) {
        console.log(error)
    }
}

const deletedFromDB = async (id: string) => {
    const result = await BikeModel.findByIdAndUpdate({ _id: id }, { isAvailable: false })
    return result
}

export const BikeService = {
    addBike,
    getAllBikeFromDB,
    getUpdatedBikeFromDB,
    deletedFromDB
}