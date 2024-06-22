import { TUser } from "./user.interface";
import { User } from "./user.model";


const signUp = async (payload: TUser) => {
    const result = await User.create(payload)
    return result
}

const getMyProfile = async (_id: string) => {
    const query = _id ? { _id } : {}
    const result = await User.find(query)
    return result
}

const getUpdatedUser = async (id: string, payload: Partial<TUser>) => {
    try {
        const updatedUser = await User.findOneAndUpdate({ _id: id }, payload, { new: true })
        return updatedUser
    } catch (error) {
        console.log(error)
    }
}

export const userService = {
    signUp,
    getMyProfile,
    getUpdatedUser
}