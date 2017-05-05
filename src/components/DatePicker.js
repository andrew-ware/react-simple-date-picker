import React from 'react';
import PropTypes from 'prop-types';
import DatePickerHeader from './DatePickerHeader';
import DatePickerDayNamesHeader from './DatePickerDayNamesHeader';
import DatePickerRow from './DatePickerRow';
import '../css/components/DatePicker.css';

const DatePicker = props => (
  <div className="DatePicker">
    <DatePickerHeader
      changeMonthOnClick={props.changeMonthOnClick}
      displayedMonth={props.displayedMonth}
    />
    <DatePickerDayNamesHeader />
    {
      props.displayedMonth.getMonthMap().map((row, i) => (
        <DatePickerRow
          key={`DatePickerRow-${i}`}
          dayOnClick={props.dayOnClick}
          dirty={props.dirty}
          row={row}
          selectedDate={props.selectedDate}
        />
      ))
    }
  </div>
);

export default DatePicker;

DatePicker.propTypes = {
  changeMonthOnClick: PropTypes.shape({
    previous: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
  }).isRequired,
  dayOnClick: PropTypes.func.isRequired,
  dirty: PropTypes.bool.isRequired,
  displayedMonth: PropTypes.shape({
    getMonthMap: PropTypes.func.isRequired,
    getFirstDay: PropTypes.func.isRequired,
  }).isRequired,
  selectedDate: PropTypes.shape({
    getTime: PropTypes.func.isRequired,
  }).isRequired,
};
