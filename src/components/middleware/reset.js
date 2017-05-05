import DatePickerDate from '../../middleware/DatePickerDate'
import DatePickerMonth from '../../middleware/DatePickerMonth';

function reset() {
  const selectedDate = new DatePickerDate();
  const displayedMonth = new DatePickerMonth(
    selectedDate.getMonth(),
    selectedDate.getYear()
  );
  this.setState({
    ...this.state,
    selectedDate,
    displayedMonth,
    dirty: true,
  })
};

export default reset;
