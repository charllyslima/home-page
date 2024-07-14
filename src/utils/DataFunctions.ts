export const calculateYearDifference = (date1: Date, date2: Date) => {
    const year1 = date1.getFullYear();
    const year2 = date2.getFullYear();
    const month1 = date1.getMonth();
    const month2 = date2.getMonth();
    const day1 = date1.getDate();
    const day2 = date2.getDate();

    let yearDiff = year2 - year1;

    if (month2 < month1 || (month2 === month1 && day2 < day1)) {
        yearDiff--;
    }

    return yearDiff;
};