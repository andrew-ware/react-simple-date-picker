import validateType from '../validateType';
import monthNumberToNameDict from '../monthNumberToNameDict';
import getMonthDayCount from './getMonthDayCount';

function DatePickerMonth(
  /* number month */ month,
  /* number year */ year,
) {
  validateType(month, 'number');
  this.month = month;
  validateType(year, 'number');
  this.year = year;

  this.getMonthString = () => monthNumberToNameDict[this.month];

  this.getMonthMap = () => {
    const dayCount = getMonthDayCount(this.month, this.year);
    const map = [];
    let tempRow = [];
    for (let i = 0; i < this.getFirstDay(); i += 1) {
      tempRow.push(0);
    }

    let monthMapIndex = dayCount;
    while (monthMapIndex > -1) {
      if (tempRow.length > 6) {
        map.push(tempRow);
        tempRow = [];
      }
      const index = dayCount - monthMapIndex;
      tempRow.push(index + 1);
      monthMapIndex -= 1;
    }

    if (tempRow.length > 0) {
      map.push(tempRow);
    }

    return map;
  };

  this.getFirstDay = () => {
    const day = new Date(`${this.year}-${this.month}-01`).getDay();
    return day === 0 ? 7 : day;
  };
}

export default DatePickerMonth;
