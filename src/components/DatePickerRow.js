import React from 'react';
import PropTypes from 'prop-types';
import DatePickerDay from './DatePickerDay';
import '../css/components/DatePickerRow.css';

const DatePickerRow = props => (
  <div className="DatePickerRow">
    {
      props.row.map((day, i) => (
        <DatePickerDay
          key={`DatePickerDay-${i}`}
          day={day}
          dayOnClick={props.dayOnClick}
        />
      ))
    }
  </div>
);

export default DatePickerRow;

DatePickerRow.propTypes = {
  row: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  dayOnClick: PropTypes.func.isRequired,
};
