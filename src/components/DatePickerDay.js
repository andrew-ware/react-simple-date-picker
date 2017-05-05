import React from 'react';
import PropTypes from 'prop-types';
import '../css/components/DatePickerDay.css';

const DatePickerDay = props => (
  <div className="DatePickerDay">
    <button
      className="DatePickerDay-button"
      value={props.day}
      onClick={props.dayOnClick}
      disabled={!props.day}
    >
      {props.day || '' /* buffer days appear as 0's */}
    </button>
  </div>
);

export default DatePickerDay;

DatePickerDay.propTypes = {
  day: PropTypes.number.isRequired,
  dayOnClick: PropTypes.func.isRequired,
};
