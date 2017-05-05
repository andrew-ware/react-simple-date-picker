import React, { Component } from 'react';
import '../lib/mdi/css/materialdesignicons.css';
import '../css/components/DatePicker.css';
import { DatePickerDate, DatePickerMonth } from '../middleware';
import dayOnClick from './middleware/dayOnClick';
import { previous, next } from './middleware/changeMonthOnClick';
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
      previous: previous.bind(this),
      next: next.bind(this),
    };
    this.reset = reset.bind(this);

    const selectedDate = new DatePickerDate();
    const displayedMonth = new DatePickerMonth(
      selectedDate.getMonth(),
      selectedDate.getYear()
    );
    this.state = {
      displayedMonth,
      dirty: true,
      inputName: 'date',
      reset: this.reset,
      selectedDate,
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
          displayedMonth={this.state.displayedMonth}
        />
        <DatePickerDayNamesHeader />
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
        <DatePickerValueDisplay
          value={this.state.selectedDate.getHumanDateString()}
        />
        {
          this.reset
            ? <DatePickerReset reset={this.reset} />
            : null
        }
      </div>
    );
  }
};

export default DatePicker;
