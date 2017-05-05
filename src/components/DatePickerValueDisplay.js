import React from 'react';
import PropTypes from 'prop-types';
import '../css/components/DatePickerValueDisplay.css';

const DatePickerValueDisplay = props => (
  <div className="DatePickerValueDisplay">
    <span className="DatePickerValueDisplay-selected-span">
      Date Selected:
    </span>
    <span className="DatePickerValueDisplay-value-span">
      {props.value}
    </span>
  </div>
);

export default DatePickerValueDisplay;

DatePickerValueDisplay.propTypes = {
  value: PropTypes.string.isRequired,
};
