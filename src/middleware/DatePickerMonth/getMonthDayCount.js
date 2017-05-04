import isLeapYear from './isLeapYear';

const getMonthDayCount = (month, year) => {
  const monthDayCounts = {
    1: 31,
    2: isLeapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };
  return monthDayCounts[month];
};

export default getMonthDayCount;
