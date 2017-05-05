import React from 'react';
import PropTypes from 'prop-types';

const DatePickerHeader = props => (
  <div className="DatePickerHeader">
    {
      props.showMonthChangeButtons
        ?
          <div className="DatePickerHeader-month-previous-wrapper">
            <button
              onClick={props.changeMonthOnClick.previous}
              title="previous month"
            >
              <i className="mdi mdi-arrow-left" />
            </button>
          </div>
        : null
    }
    <div className="DatePickerHeader-span-wrapper DatePickerHeader-month-wrapper">
      <span>{props.displayedMonth.getMonthString()}</span>
    </div>
    <div className="DatePickerHeader-span-wrapper DatePickerHeader-year-wrapper">
      <span>{props.displayedMonth.year}</span>
    </div>
    {
      props.showYearChangeButtons
        ?
          <div className="DatePickerHeader-year-changer-buttons-wrapper">
            <div className="DatePickerHeader-year-previous-wrapper">
              <button
                onClick={props.changeYearOnClick.next}
                title="next year"
              >
                <i className="mdi mdi-arrow-up" />
              </button>
            </div>
            <div className="DatePickerHeader-year-next-wrapper">
              <button
                onClick={props.changeYearOnClick.previous}
                title="previous year"
              >
                <i className="mdi mdi-arrow-down" />
              </button>
            </div>
          </div>
        : null
    }
    {
      props.showMonthChangeButtons
        ?
          <div className="DatePickerHeader-month-next-wrapper">
            <button
              onClick={props.changeMonthOnClick.next}
              title="next month"
            >
              <i className="mdi mdi-arrow-right" />
            </button>
          </div>
        : null
    }
  </div>
);

export default DatePickerHeader;

DatePickerHeader.propTypes = {
  changeMonthOnClick: PropTypes.shape({
    previous: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
  }).isRequired,
  changeYearOnClick: PropTypes.shape({
    previous: PropTypes.func.isRequired,
    next: PropTypes.func.isRequired,
  }).isRequired,
  displayedMonth: PropTypes.shape({
    getMonthMap: PropTypes.func.isRequired,
    getFirstDay: PropTypes.func.isRequired,
  }).isRequired,
  showMonthChangeButtons: PropTypes.bool.isRequired,
  showYearChangeButtons: PropTypes.bool.isRequired,
};
