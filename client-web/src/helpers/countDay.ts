export const countDay = (startDate : Date  , endDate : Date ) => {
    const diffInTime = Math.abs(new Date(endDate).getTime() - new Date(startDate).getTime());
    const diffInDays = Math.ceil(diffInTime / (1000 * 3600 * 24));
    return diffInDays
}