import React from 'react';
import PropTypes from 'prop-types';
import DatePickerDay from './DatePickerDay';

const DatePickerRow = props => (
  <div className="DatePickerRow">
    {
      props.row.map((day, i) => (
        <DatePickerDay
          key={`DatePickerDay-${i}`}
          day={day}
          active={props.selectedDate.getDate() === day && props.dirty}
          dayOnClick={props.dayOnClick}
        />
      ))
    }
  </div>
);

export default DatePickerRow;

DatePickerRow.propTypes = {
  dayOnClick: PropTypes.func.isRequired,
  dirty: PropTypes.bool.isRequired,
  row: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  selectedDate: PropTypes.shape({
    getTime: PropTypes.func.isRequired,
  }).isRequired,
};
