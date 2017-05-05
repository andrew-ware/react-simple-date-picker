import validateType from '../validateType';
import monthNumberToNameDict from '../monthNumberToNameDict';
import zeroPad from '../zeroPad';

function DatePickerDate(/* Date date */ date = new Date()) {
  validateType(date, 'Date');
  this.date = date;

  this.getTime = () => this.date.getTime();
  this.getDate = () => this.date.getDate();
  this.getMonth = () => this.date.getMonth();
  this.getYear = () => this.date.getFullYear();

  this.getHumanDateString = () => {
    const day = this.getDate();
    const month = monthNumberToNameDict[this.getMonth()];
    const year = this.getYear();
    return `${month} ${day}, ${year}`;
  };

  this.getFormattedDateString = () => {
    const day = zeroPad(this.getDate(), 2);
    // month is stored as an int 0-11, we need it to be an int corresponding
    // to its real calendar month, so we increment by 1
    const month = zeroPad(this.getMonth() + 1, 2);
    const year = this.getYear();
    return `${year}-${month}-${day}`;
  };
};

export default DatePickerDate;
