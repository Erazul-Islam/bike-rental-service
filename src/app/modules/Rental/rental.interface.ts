export type TRental = {
    bikeId: string,
    userId: Object | undefined
    userName : string | undefined,
    startTime: string,
    returnTime: Date,
    totalCost: number,
    discountedTotalCost: number,
    isReturned: boolean,
    isPaid: boolean,
};
