import React, { Component } from 'react';
import autoBind from 'react-autobind';
import '../css/components/Root.css';
import { DatePickerDate, DatePickerMonth } from '../middleware';
import DatePicker from './DatePicker';

class Root extends Component {
  constructor(props) {
    super(props);
    autoBind(this);

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
      displayedMonth: this.state.displayedMonth
    };
  }

  render() {
    return (
      <div className="Root">
        <DatePicker {...this.getDatePickerProps()}/>
        <div>
         <div>{this.state.selectedDate.getDate()}</div>
         <div>{this.state.selectedDate.getMonth()}</div>
         <div>{this.state.selectedDate.getYear()}</div>
       </div>
      </div>
    );
  }
}

export default Root;
