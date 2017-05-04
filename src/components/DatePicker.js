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
        <DatePickerRow key={`DatePickerRow-${i}`} row={row} />
      ))
    }
  </div>
);

export default DatePicker;

DatePicker.propTypes = {
  selectedDate: PropTypes.shape({
    getTime: PropTypes.func.isRequired,
  }).isRequired,
  displayedMonth: PropTypes.shape({
    getMonthMap: PropTypes.func.isRequired,
    getFirstDay: PropTypes.func.isRequired,
  }).isRequired,
};
