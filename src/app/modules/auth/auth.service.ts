import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from "../../config";
import { createToken } from "./auth.utils";


const loginUser = async (payload: TLoginUser) => {
    // console.log(payload)

    const user = await User.isUSerExistByCustomEmial(payload.email)
    console.log(User.isPasswordMatched)

    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'This user is not found')
    }

    if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
        throw new AppError(httpStatus.FORBIDDEN, 'Invalid Password')
    }

    const jwtPayload = {
        email: user.email,
        role: user.role
    }

    const accessToken = createToken(jwtPayload, config.jwtAccessSecret as string, config.JWT_ACCESS_EXPIRES_IN as string)
    const RefressToken = createToken(jwtPayload, config.jwtRefressSecret as string, config.JWT_REFRESS_EXPIRES_IN as string)



    return {
        accessToken,
        RefressToken,
        user
    }
}

export const authService = {
    loginUser
}