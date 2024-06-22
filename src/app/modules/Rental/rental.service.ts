import { BikeModel } from "../bike/bike.model"
import { TRental } from "./rental.interface"
import { RentalModel } from "./rental.model"



const createRental = async (payload: TRental) => {
    // const id = payload.bikeId
    // const results = await BikeModel.updateOne({ id }, { isAvailable: false })

    const result = await RentalModel.create(payload)

    return result
}

const ReturnedRental = async (id: string, payload: Partial<TRental>, ) => {

    const find = await RentalModel.findOne({ _id: id })
    console.log(find)

    const startTime = find?.startTime ? new Date(find.startTime) : null;
    let returnTime = find?.returnTime ? new Date(find.returnTime) : null;

    if (startTime) {
        if (!returnTime) {
            returnTime = new Date();
        }
        const timeDifference = returnTime.getTime() - startTime.getTime();
        const hoursDifference = Math.round(timeDifference / (1000 * 60 * 60))
        let perHourCost = 15
        const totalCost = perHourCost * hoursDifference
        console.log(`Time difference: ${hoursDifference} and totalCost is ${totalCost}`);
        const updatedRental = await RentalModel.findOneAndUpdate({ _id: id }, { $set: { isReturned: true, totalCost: totalCost, returnTime: new Date() } }, { new: true })
        return updatedRental
    }
}

export const rentalService = {
    createRental,
    ReturnedRental
}