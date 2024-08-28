import { Model } from "mongoose";
import { USER_ROLE } from "./user.constant";

export interface TUser {
    [_id: string]: any;
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    createdAt: Date,
    updatedAt: Date,
    role: 'admin' | 'user'
};

export interface UserModel extends Model<TUser> {
    // myStaticMethod(): number
    isUSerExistByCustomEmial(email: string): Promise<TUser>
    isPasswordMatched(plainTextPass: string, hashedPass: string): Promise<boolean>
}



export type TUserRole = keyof typeof USER_ROLE