import { BikeModel } from "../bike/bike.model"
import { TRental } from "./rental.interface"
import { RentalModel } from "./rental.model"



const createRental = async (payload: TRental) => {
    // const id = payload.bikeId
    // const results = await BikeModel.updateOne({ id }, { isAvailable: false })

    const result = await RentalModel.create(payload)

    return result
}

const ReturnedRental = async (id: string, payload: Partial<TRental>) => {


    const updatedRental = await RentalModel.findOneAndUpdate({ _id: id }, payload, { new: true })
    return updatedRental

}




export const rentalService = {
    createRental,
    ReturnedRental
}