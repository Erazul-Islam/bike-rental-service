export type TRental = {
    bikeId: string,
    userId: Object | undefined
    startTime: string,
    returnTime: Date,
    totalCost: number,
    isReturned: boolean,
    isPaid: boolean,
};
