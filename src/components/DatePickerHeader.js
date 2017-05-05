import React from 'react';
import PropTypes from 'prop-types';
import '../css/components/DatePickerHeader.css';

const DatePickerHeader = props => (
  <div className="DatePickerHeader">
    <div className="DatePickerHeader-month-previous-wrapper">
      <button
        onClick={props.changeMonthOnClick.previous}
        title="previous month"
      >
        <i className="mdi mdi-arrow-left" />
      </button>
    </div>
    <div className="DatePickerHeader-span-wrapper DatePickerHeader-month-wrapper">
      <span>{props.displayedMonth.getMonthString()}</span>
    </div>
    <div className="DatePickerHeader-span-wrapper DatePickerHeader-year-wrapper">
      <span>{props.displayedMonth.year}</span>
    </div>
    <div className="DatePickerHeader-month-next-wrapper">
      <button
        onClick={props.changeMonthOnClick.next}
        title="next month"
      >
        <i className="mdi mdi-arrow-right" />
      </button>
    </div>
  </div>
);

export default DatePickerHeader;

DatePickerHeader.propTypes = {
  changeMonthOnClick: PropTypes.shape({
    previous: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
  }).isRequired,
  displayedMonth: PropTypes.shape({
    getMonthMap: PropTypes.func.isRequired,
    getFirstDay: PropTypes.func.isRequired,
  }).isRequired,
};
