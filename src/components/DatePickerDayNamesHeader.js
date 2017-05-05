import React from 'react';

const DatePickerDayNamesHeader = () => {
  const daysOfWeek = [ 'S', 'M', 'T', 'W', 'T', 'F', 'S' ];
  return (
    <div className="DatePickerDayNamesHeader">
      {
        daysOfWeek.map((dayOfWeek, i) => (
          <div
            key={`DatePickerDayNamesHeader-day-of-week-${i}`}
            className="DatePickerDayNamesHeader-day-of-week"
          >
            {dayOfWeek}
          </div>
        ))
      }
    </div>
  );
};

export default DatePickerDayNamesHeader;
