export const leapYear = (year: number): boolean => {
    if (isAtypicalLeapYear(year)) return true;
    if (isAtypicalNormalYear(year)) return false;
    if (isTypicalLeapYear(year)) return true;
    return false;
}

const isAtypicalLeapYear = (year: number): boolean => {
    return year % 400 === 0;
}

const isTypicalLeapYear = (year: number): boolean => {
    return year % 4 === 0;
}

const isAtypicalNormalYear = (year: number): boolean => {
    return year % 100 === 0;
}
