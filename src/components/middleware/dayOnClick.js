import DatePickerDate from '../../middleware/DatePickerDate';
import zeroPad from '../../middleware/zeroPad';

function dayOnClick(e) {
  e.preventDefault();
  const day = parseInt(e.target.value, 10);
  // month is stored as an int 0-11, we need it to be an int corresponding
  // to its real calendar month, so we increment by 1
  const month = this.state.displayedMonth.month + 1;
  const year = this.state.displayedMonth.year;

  const selectedDate = new DatePickerDate(new Date(
    `${year}-${zeroPad(month, 2)}-${zeroPad(day, 2)}T12:00:00Z`
  ));
  this.setState({
    ...this.state,
    selectedDate,
    dirty: true,
  });
};

export default dayOnClick;
