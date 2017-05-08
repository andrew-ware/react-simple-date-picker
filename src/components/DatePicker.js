import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../lib/mdi/css/materialdesignicons.css';
import '../css/DatePicker.css';
import { DatePickerDate, DatePickerMonth } from '../middleware';
import dayOnClick from './middleware/dayOnClick';
import { previousMonth, nextMonth } from './middleware/changeMonthOnClick';
import { previousYear, nextYear } from './middleware/changeYearOnClick';
import reset from './middleware/reset';
import DatePickerHeader from './DatePickerHeader';
import DatePickerDayNamesHeader from './DatePickerDayNamesHeader';
import DatePickerRow from './DatePickerRow';
import DatePickerValueDisplay from './DatePickerValueDisplay';
import DatePickerReset from './DatePickerReset';

class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.noop = () => {};
    this.dayOnClick = dayOnClick.bind(this);
    this.changeMonthOnClick = {
      previous: previousMonth.bind(this),
      next: nextMonth.bind(this),
    };
    this.changeYearOnClick = {
      previous: previousYear.bind(this),
      next: nextYear.bind(this),
    };
    this.reset = reset.bind(this);

    const selectedDate = new DatePickerDate(this.props.initialDate)
    const displayedMonth = new DatePickerMonth(
      selectedDate.getMonth(),
      selectedDate.getYear()
    );
    this.state = {
      displayedMonth,
      dirty: this.props.dirty,
      inputName: this.props.inputName,
      showDateReset: this.props.showDateReset,
      showDateSelected: this.props.showDateSelected,
      showWeekDayNames: this.props.showWeekDayNames,
      showMonthChangeButtons: this.props.showMonthChangeButtons,
      showYearChangeButtons: this.props.showYearChangeButtons,
      selectedDate
    };
  }

  render() {
    return (
      <div className="DatePicker">
        <input
          type="date"
          hidden
          name={this.state.inputName}
          value={this.state.selectedDate.getFormattedDateString()}
          onChange={this.noop}
        />
        <DatePickerHeader
          changeMonthOnClick={this.changeMonthOnClick}
          changeYearOnClick={this.changeYearOnClick}
          displayedMonth={this.state.displayedMonth}
          showMonthChangeButtons={this.state.showMonthChangeButtons}
          showYearChangeButtons={this.state.showYearChangeButtons}
        />
        {
          this.state.showWeekDayNames
            ? <DatePickerDayNamesHeader/>
            : null
        }
        {
          this.state.displayedMonth.getMonthMap().map((row, i) => (
            <DatePickerRow
              key={`DatePickerRow-${i}`}
              dayOnClick={this.dayOnClick}
              dirty={this.state.dirty}
              row={row}
              selectedDate={this.state.selectedDate}
            />
          ))
        }
        {
          this.state.showDateSelected
            ?
              <DatePickerValueDisplay
                value={this.state.selectedDate.getHumanDateString()}
              />
            : null
        }
        {
          this.state.showDateReset
            ? <DatePickerReset reset={this.reset} />
            : null
        }
      </div>
    );
  }
};

export default DatePicker;

DatePicker.propTypes = {
  dirty: PropTypes.bool,
  inputName: PropTypes.string,
  showDateReset: PropTypes.bool,
  showDateSelected: PropTypes.bool,
  showWeekDayNames: PropTypes.bool,
  showMonthChangeButtons: PropTypes.bool,
  showYearChangeButtons: PropTypes.bool,
  initialDate: PropTypes.instanceOf(Date),
};

DatePicker.defaultProps = {
  dirty: true,
  inputName: 'date',
  showDateReset: true,
  showDateSelected: true,
  showWeekDayNames: true,
  showMonthChangeButtons: true,
  showYearChangeButtons: true,
  initialDate: new Date(),
};
