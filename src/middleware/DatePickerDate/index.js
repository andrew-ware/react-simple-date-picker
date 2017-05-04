import validateType from '../validateType';

function DatePickerDate(/* Date date */ date = new Date()) {
  validateType(date, 'Date');
  this.date = date;

  this.getTime = () => this.date.getTime();
  this.getDate = () => this.date.getDate();
  this.getMonth = () => this.date.getMonth();
  this.getYear = () => this.date.getFullYear();
};

export default DatePickerDate;
