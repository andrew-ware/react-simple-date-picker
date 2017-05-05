import React, { Component } from 'react';
import '../lib/mdi/css/materialdesignicons.css';
import '../css/components/Root.css';
import { DatePickerDate, DatePickerMonth } from '../middleware';
import DatePicker from './DatePicker';
import dayOnClick from './middleware/dayOnClick';
import { previous, next } from './middleware/changeMonthOnClick';

class Root extends Component {
  constructor(props) {
    super(props);

    this.getDatePickerProps = this.getDatePickerProps.bind(this);
    this.dayOnClick = dayOnClick.bind(this);
    this.changeMonthOnClick = {
      previous: previous.bind(this),
      next: next.bind(this),
    };

    const selectedDate = new DatePickerDate();
    const displayedMonth = new DatePickerMonth(
      selectedDate.getMonth(),
      selectedDate.getYear()
    );
    this.state = {
      selectedDate,
      displayedMonth,
      dirty: true
    };
  }

  getDatePickerProps() {
    return {
      changeMonthOnClick: this.changeMonthOnClick,
      dayOnClick: this.dayOnClick,
      dirty: this.state.dirty,
      displayedMonth: this.state.displayedMonth,
      selectedDate: this.state.selectedDate,
    };
  }

  render() {
    return (
      <div className="Root">
        <DatePicker {...this.getDatePickerProps()}/>
        <div>{this.state.selectedDate.getHumanDateString()}</div>
        <div>{this.state.selectedDate.getFormattedDateString()}</div>
      </div>
    );
  }
}

export default Root;
