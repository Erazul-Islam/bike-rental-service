import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";
import bcrypt from 'bcrypt'
import config from "../../config";

const userSchema = new Schema<TUser>(
    {
        name: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true,
            select: 0
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    },
);

userSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        delete ret.password;
        return ret;
    }
})

userSchema.pre('save', async function (next) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const user = this; // doc
    // hashing password and save into DB
  
    user.password = await bcrypt.hash(
      user.password,
      Number(config.bcrypt_salt_rounds),
    );
  
    next();
  });

// userSchema.post('save', function (doc, next) {
//     doc.password = '';
//     next();
//   });

export const User = model<TUser>('User', userSchema);