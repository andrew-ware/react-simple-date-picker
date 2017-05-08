function previousMonth(e) {
  e.preventDefault();
  this.setState({
    ...this.state,
    displayedMonth: this.state.displayedMonth.getPreviousMonth(),
    dirty: this.state.displayedMonth.getPreviousMonth().month
          === this.state.selectedDate.getMonth() &&
            this.state.displayedMonth.getPreviousMonth().year
              === this.state.selectedDate.getYear(),
  });
};

function nextMonth(e) {
  e.preventDefault();
  this.setState({
    ...this.state,
    displayedMonth: this.state.displayedMonth.getNextMonth(),
    dirty: this.state.displayedMonth.getNextMonth().month
          === this.state.selectedDate.getMonth() &&
            this.state.displayedMonth.getNextMonth().year
              === this.state.selectedDate.getYear(),
  });
}

export {
  previousMonth,
  nextMonth
};
