import config from "../../config";
import { BikeModel } from "../bike/bike.model";
import { User } from "../user/user.model";
import { TCart } from "./cart.interface";
import jwt from 'jsonwebtoken'
import { CartModel } from "./cart.model";

const AddtoCart = async (payload: TCart, token: string, id: string) => {
    const find = await BikeModel.findOne({ _id: id })
    console.log(find)
    const decoded = jwt.verify(token, config.jwtAccessSecret as string)

    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }

    const brand = find?.brand
    const name = find?.name
    const description = find?.description
    const pricePerHour = find?.pricePerHour
    const cc = find?.cc
    const year = find?.cc
    const model = find?.model
    const image = find?.image
    const isAvailable = find?.isAvailable

    const finduser = await User.findOne({ email: decoded.email })
    const userId = finduser?._id
    const userEmail = finduser?.email
    payload.userId = userId
    payload.userEmail = userEmail
    payload.brand = brand
    payload.name = name
    payload.description = description,
        payload.pricePerHour = pricePerHour
    payload.cc = cc
    payload.year = year
    payload.model = model
    payload.image = image
    payload.isAvailable = isAvailable

    const result = CartModel.create(payload)

    return result

}

const getCart = async (token: string) => {
    const decoded = jwt.verify(token, config.jwtAccessSecret as string)

    if (typeof decoded === 'string' || !('email' in decoded)) {
        throw new Error('Invalid token structure');
    }
    const finduser = await User.findOne({ email: decoded.email })
    const userId = finduser?._id

    const userCart = await CartModel.find({ userId })

    if (!userCart) {
        throw new Error('User not found');
    }

    return userCart;
}

const deleteCart = async (id: string) => {
    const result = await CartModel.deleteOne({ _id: id })
    return result

}

export const cartService = {
    AddtoCart,
    getCart,
    deleteCart
}