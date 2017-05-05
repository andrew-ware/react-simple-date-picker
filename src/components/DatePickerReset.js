import React from 'react';
import PropTypes from 'prop-types';

const DatePickerReset = props => (
  <div className="DatePickerReset">
    <button
      className="DatePickerReset-button"
      onClick={props.reset}
    >
      <span>reset</span>
    </button>
  </div>
);

export default DatePickerReset;

DatePickerReset.propTypes = {
  reset: PropTypes.func.isRequired,
};
