export const leapYear = (year: number): boolean => {
    if (year % 400 === 0) return true;
    if (year % 4 === 0 && !(year % 100 === 0)) return true;
    return false;
}