import { TRental } from "./rental.interface"
import { RentalModel } from "./rental.model"



const createRental = async (payload: TRental) => {
    const result = await RentalModel.create(payload)
    return result
}

export const rentalService = {
    createRental
}