export type TBike = {
    name: string,
    image: TImage[],
    description: string,
    pricePerHour: number,
    cc: number,
    year: number,
    model: string,
    brand: string,
    isAvailable:boolean
};

export type TImage = {
    image : string
}
