import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from 'bcrypt'


const loginUser = async (payload: TLoginUser) => {
    console.log(payload)

    const isUserExists = await User.findOne({ email: payload?.email })
    console.log(isUserExists)

    if (!isUserExists) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found')
    }

    const isPasswordMatched = await bcrypt.compare(payload.password, isUserExists.password)
    
    if(isPasswordMatched === false){
        throw new AppError(httpStatus.FORBIDDEN,'Incorrect password')
    }

    return {}
}

export const authService = {
    loginUser
}