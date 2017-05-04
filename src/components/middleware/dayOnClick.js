import DatePickerDate from '../../middleware/DatePickerDate';

function dayOnClick(e) {
  const day = parseInt(e.target.value, 10);
  // month is stored as an int 0-11, we need it to be an int corresponding
  // to its real calendar month, so we increment by 1
  const month = this.state.displayedMonth.month + 1;
  const year = this.state.displayedMonth.year;

  this.setState({
    ...this.state,
    selectedDate: new DatePickerDate(new Date(`${year}-${month}-${day}`)),
  });
};

export default dayOnClick;
