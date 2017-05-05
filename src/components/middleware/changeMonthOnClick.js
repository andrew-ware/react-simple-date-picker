function previous() {
  this.setState({
    ...this.state,
    displayedMonth: this.state.displayedMonth.getPreviousMonth(),
    dirty: this.state.displayedMonth.getPreviousMonth().month
      === this.state.selectedDate.getMonth(),
  });
};

function next() {
  this.setState({
    ...this.state,
    displayedMonth: this.state.displayedMonth.getNextMonth(),
    dirty: this.state.displayedMonth.getNextMonth().month
      === this.state.selectedDate.getMonth(),
  });
}

export {
  previous,
  next
};
