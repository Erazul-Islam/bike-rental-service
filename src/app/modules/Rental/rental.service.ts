import config from "../../config"
import { BikeModel } from "../bike/bike.model"
import { User } from "../user/user.model"
import { TRental } from "./rental.interface"
import { RentalModel } from "./rental.model"
import jwt from 'jsonwebtoken'



const createRental = async (payload: TRental, token: string) => {

    const bikeId = payload.bikeId
    const find = await BikeModel.findOne({ _id: bikeId })

    const decoded = jwt.verify(token, config.jwtAccessSecret as string)

    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }

    const finduser = await User.findOne({ email: decoded.email })
    const userId = finduser?._id
    payload.userId = userId
    // 17.12
    // 17.6
    if (find?.isAvailable === true) {
        const isAvailable = await BikeModel.updateOne({ _id: find }, { isAvailable: false })
        if (isAvailable) {
            // payload.userId = user

            const result = await RentalModel.create(payload)
            return result
        }
    }
    else {
        return 'Bike is not available'
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

const getRental = async (token: string) => {


    try {
        const decoded = jwt.verify(token, config.jwtAccessSecret as string)

        if (typeof decoded === 'string' || !('email' in decoded)) {
            throw new Error('Invalid token structure');
        }


        const finduser = await User.findOne({ email: decoded.email })
        const userId = finduser?._id
        console.log(finduser, userId)



        const user = await RentalModel.find({ userId })

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error) {
        throw new Error('Invalid token');
    }
}

export const rentalService = {
    createRental,
    ReturnedRental,
    getRental
}