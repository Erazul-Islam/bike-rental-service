import { Model } from "mongoose";

export interface TUser {
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
}