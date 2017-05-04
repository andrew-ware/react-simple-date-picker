import React from 'react';
import PropTypes from 'prop-types';
import DatePickerHeader from './DatePickerHeader';
import DatePickerRow from './DatePickerRow';
import '../css/components/DatePicker.css';

const DatePicker = props => (
  <div className="DatePicker">
    <DatePickerHeader displayedMonth={props.displayedMonth} />
    {
      props.displayedMonth.getMonthMap().map((row, i) => (
        <DatePickerRow
          key={`DatePickerRow-${i}`}
          row={row}
          dayOnClick={props.dayOnClick}
        />
      ))
    }
  </div>
);

export default DatePicker;

DatePicker.propTypes = {
  dayOnClick: PropTypes.func.isRequired,
  displayedMonth: PropTypes.shape({
    getMonthMap: PropTypes.func.isRequired,
    getFirstDay: PropTypes.func.isRequired,
  }).isRequired,
  selectedDate: PropTypes.shape({
    getTime: PropTypes.func.isRequired,
  }).isRequired,
};
