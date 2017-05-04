import React, { Component } from 'react';
import '../css/components/Root.css';
import { DatePickerDate, DatePickerMonth } from '../middleware';
import DatePicker from './DatePicker';
import dayOnClick from './middleware/dayOnClick';

class Root extends Component {
  constructor(props) {
    super(props);

    this.getDatePickerProps = this.getDatePickerProps.bind(this);
    this.dayOnClick = dayOnClick.bind(this);

    const selectedDate = new DatePickerDate();
    const displayedMonth = new DatePickerMonth(
      selectedDate.getMonth(),
      selectedDate.getYear()
    );
    this.state = {
      selectedDate,
      displayedMonth
    };
  }

  getDatePickerProps() {
    return {
      selectedDate: this.state.selectedDate,
      dayOnClick: this.dayOnClick,
      displayedMonth: this.state.displayedMonth,
    };
  }

  render() {
    return (
      <div className="Root">
        <DatePicker {...this.getDatePickerProps()}/>
        <div>
         <div>{this.state.selectedDate.getMonth() + 1}</div>
         <div>{this.state.selectedDate.getDate()}</div>
         <div>{this.state.selectedDate.getYear()}</div>
       </div>
      </div>
    );
  }
}

export default Root;
