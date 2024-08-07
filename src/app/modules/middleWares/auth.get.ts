import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import AppError from "../../errors/AppError";
import jwt, { JwtPayload } from 'jsonwebtoken'
import httpStatus from "http-status";
import config from "../../config";




const getValidation = () => {
    return catchAsync(async (req: Request, res: Response) => {
        console.log(req.headers.authorization)

        const token = req.headers.authorization

        if (!token) {
            throw new AppError(httpStatus.UNAUTHORIZED, 'You have no token')
        }

        jwt.verify(token, config.jwtAccessSecret as string, function (err, decoded) {
            if (err) {
                throw new AppError(httpStatus.UNAUTHORIZED, 'Token is not varified')
            }

            return decoded

        });


    }
    )

};

export default getValidation;