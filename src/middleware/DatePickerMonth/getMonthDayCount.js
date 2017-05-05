import isLeapYear from './isLeapYear';

const getMonthDayCount = (month, year) => {
  const monthDayCounts = {
    0: 31,
    1: isLeapYear(year) ? 29 : 28,
    2: 31,
    3: 30,
    4: 31,
    5: 30,
    6: 31,
    7: 31,
    8: 30,
    9: 31,
    10: 30,
    11: 31,
  };
  return monthDayCounts[month];
};

export default getMonthDayCount;
