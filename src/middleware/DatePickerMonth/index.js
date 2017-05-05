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
    while (monthMapIndex > 0) {
      if (tempRow.length > 6) {
        map.push(tempRow);
        tempRow = [];
      }
      const index = dayCount - monthMapIndex;
      tempRow.push(index + 1);
      monthMapIndex -= 1;
    }

    if (tempRow.length > 0) {
      while (tempRow.length < 7) {
        tempRow.push(0);
      }
      map.push(tempRow);
    }

    return map;
  };

  this.getFirstDay = () => {
    // month is stored as an int 0-11, we need it to be an int corresponding
    // to its real calendar month, so we increment by 1
    const day = new Date(`${this.year}-${this.month + 1}-01`).getDay();
    return day % 7;
  };

  const createNewMonth = (monthIncrement, yearIncrement) => {
    const month = ((this.month || 12) + monthIncrement) % 12;
    let year = this.year + (yearIncrement || 0);
    if (this.month + monthIncrement === 12) {
      year = this.year + 1;
    } else if (this.month + monthIncrement === -1) {
      year = this.year - 1;
    }
    return new DatePickerMonth(month, year);
  };

  this.getPreviousMonth = () => createNewMonth(-1);

  this.getNextMonth = () => createNewMonth(1);

  this.getPreviousYear = () => createNewMonth(0, -1);

  this.getNextYear = () => createNewMonth(0, 1);
}

export default DatePickerMonth;
