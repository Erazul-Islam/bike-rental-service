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

const getUpdatedBikeFromDB = async (id: string, payload: Partial<TBike>, imageUrl?: string) => {
    try {

        if (imageUrl) {
            payload.image = imageUrl;
        }

        const updatedProduct = await BikeModel.findOneAndUpdate({ _id: id }, payload, { new: true })
        return updatedProduct
    } catch (error) {
        console.log(error)
    }
}

const updateBikeAvailability = async (id: string) => {
    try {
        const updatedBike = await BikeModel.updateOne(
            { _id: id },
            { isAvailable: false },
        );
        return updatedBike;
    } catch (error) {
        console.log(error);
    }
};

const getSingleBikeFromDB = async (id: string) => {

    try {
        const updatedProduct = await BikeModel.findOne({ _id: id })
        return updatedProduct
    } catch (error) {
        console.log(error)
    }
}

const deletedFromDB = async (id: string) => {
    const result = await BikeModel.deleteOne({ _id: id })
    return result
}

export const BikeService = {
    addBike,
    getAllBikeFromDB,
    getUpdatedBikeFromDB,
    deletedFromDB,
    getSingleBikeFromDB,
    updateBikeAvailability
}