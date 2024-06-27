import { BikeModel } from "../bike/bike.model"
import { TRental } from "./rental.interface"
import { RentalModel } from "./rental.model"



const createRental = async (payload: TRental, user: any) => {
    const bikeId = payload.bikeId
    const find = await BikeModel.findOne({ _id: bikeId })
    console.log(user)
    const isAvailable = await BikeModel.updateOne({ _id: find }, { isAvailable: false })
    if (isAvailable) {
        
        payload.userId = user.id
        const result = await RentalModel.create(payload)
        return result
    }


}

const ReturnedRental = async (id: string, payload: Partial<TRental>,) => {

    const find = await RentalModel.findOne({ _id: id })
    const bikeId = find?.bikeId
    const bike = await BikeModel.findById({ _id: bikeId })
    const pricePerHour = bike?.pricePerHour
    const isAvailable = await BikeModel.updateOne({ _id: bikeId }, { isAvailable: true })

    const startTime = find?.startTime ? new Date(find.startTime) : null;
    let returnTime = find?.returnTime ? new Date(find.returnTime) : null;


    if (startTime) {
        if (!returnTime) {
            returnTime = new Date();
        }
        const timeDifference = returnTime.getTime() - startTime.getTime();
        const hoursDifference = Math.round(timeDifference / (1000 * 60 * 60))
        if (pricePerHour && isAvailable) {
            const totalCost = pricePerHour * hoursDifference
            console.log(`Time difference: ${hoursDifference} and totalCost is ${totalCost}`);
            const updatedRental = await RentalModel.findOneAndUpdate({ _id: id }, { $set: { isReturned: true, totalCost: totalCost, returnTime: new Date(), } }, { new: true })
            return updatedRental
        }

    }
}

const getRental = async () => {
    const result = await BikeModel.find()
    return result
}

export const rentalService = {
    createRental,
    ReturnedRental,
    getRental
}