import React from 'react';
import PropTypes from 'prop-types';
import '../css/components/DatePickerHeader.css';

const DatePickerHeader = props => (
  <div className="DatePickerHeader">
    <div className="DatePickerHeader-span-wrapper DatePickerHeader-month-wrapper">
      <span>{props.displayedMonth.getMonthString()}</span>
    </div>
    <div className="DatePickerHeader-span-wrapper DatePickerHeader-year-wrapper">
      <span>{props.displayedMonth.year}</span>
    </div>
  </div>
);

export default DatePickerHeader;

DatePickerHeader.propTypes = {
  displayedMonth: PropTypes.shape({
    getMonthMap: PropTypes.func.isRequired,
    getFirstDay: PropTypes.func.isRequired,
  }).isRequired,
};
