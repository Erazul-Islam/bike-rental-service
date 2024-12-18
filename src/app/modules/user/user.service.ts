import { TUser } from "./user.interface";
import { User } from "./user.model";
import jwt, { JwtPayload } from 'jsonwebtoken'
import config from "../../config";


const signUp = async (payload: TUser) => {
    const result = await User.create(payload)
    return result
}

const getAllProfileFromDB = async () => {
    const result = await User.find()
    return result
}

const getMyProfile = async (token: string) => {
    try {

        const decoded = jwt.verify(token, config.jwtAccessSecret as string)

        if (typeof decoded === 'string' || !('email' in decoded)) {
            throw new Error('Invalid token structure');
        }

        const userEmail = decoded.email

        const user = await User.findOne({ email: userEmail });

        if (!user) {
            throw new Error('User not found');
        }

        return user;
    } catch (error) {
        throw new Error('Invalid token');
    }
};

const getUpdatedUserRole = async (id: string) => {

    try {

        const user = await User.findById(id);

        console.log('user id',user)

        // If user is not found, throw an error
        if (!user) {
            throw new Error('User not found');
        }

        console.log(user.role   )
        // If the user's role is already admin, prevent the update
        if (user.role === 'admin') {
            throw new Error('Cannot change role of an admin');
        }


        const updatedProduct = await User.findOneAndUpdate({ _id: id }, { role: 'admin' }, { new: true })
        console.log('service',updatedProduct)
        return updatedProduct
    } catch (error) {
        console.log(error)
    }
}

const getUpdatedUser = async (token: string, payload: Partial<TUser>, imageUrl? : string) => {
    try {
        const decoded = jwt.verify(token, config.jwtAccessSecret as string)

        if (typeof decoded === 'string' || !('email' in decoded)) {
            throw new Error('Invalid token structure');
        }

        if (imageUrl) {
            payload.photo = imageUrl;
        }

        const userEmail = decoded.email
        const updatedUser = await User.findOneAndUpdate({ email: userEmail }, payload, { new: true })

        return updatedUser
    } catch (error) {
        console.log(error)
    }
}

const deletedFromDB = async (id: string) => {
    const result = await User.deleteOne({ _id: id })
    return result
}

export const userService = {
    signUp,
    getMyProfile,
    getUpdatedUser,
    getAllProfileFromDB,
    deletedFromDB,
    getUpdatedUserRole
}