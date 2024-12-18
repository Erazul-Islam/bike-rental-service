import { TImage } from "../bike/bike.interface"

export type TCart = {
    _id: string,
    userId: Object | undefined,
    userEmail: string | undefined,
    name: string | undefined,
    image: string | undefined,
    description: string | undefined,
    pricePerHour: number | undefined,
    cc: number | undefined,
    year: number | undefined,
    model: string | undefined,
    brand: string | undefined,
    isAvailable: boolean | undefined
}