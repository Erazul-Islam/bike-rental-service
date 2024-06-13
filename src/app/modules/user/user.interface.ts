export type TUser = {
    name: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    createdAt: Date,
    updatedAt:Date,
    role: 'admin' | 'user'
};
