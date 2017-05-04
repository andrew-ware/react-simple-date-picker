import React from 'react';
import PropTypes from 'prop-types';
import '../css/components/DatePickerDay.css';

const DatePickerDay = props => (
  <div className="DatePickerDay">
    <span className="DatePickerDay-inner-span">
      {props.day || '' /* buffer days appear as 0's */}
    </span>
  </div>
);

export default DatePickerDay;

DatePickerDay.propTypes = {
  day: PropTypes.number.isRequired,
};
