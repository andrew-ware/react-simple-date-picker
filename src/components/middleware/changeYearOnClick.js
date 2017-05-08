function previousYear(e) {
  e.preventDefault();
  this.setState({
    ...this.state,
    displayedMonth: this.state.displayedMonth.getPreviousYear(),
    dirty: this.state.displayedMonth.getPreviousYear().month
      === this.state.selectedDate.getMonth() &&
        this.state.displayedMonth.getPreviousYear().year
          === this.state.selectedDate.getYear(),
  });
};

function nextYear(e) {
  e.preventDefault();
  this.setState({
    ...this.state,
    displayedMonth: this.state.displayedMonth.getNextYear(),
    dirty: this.state.displayedMonth.getNextYear().month
          === this.state.selectedDate.getMonth() &&
            this.state.displayedMonth.getNextYear().year
              === this.state.selectedDate.getYear(),
  });
}

export {
  previousYear,
  nextYear
};
