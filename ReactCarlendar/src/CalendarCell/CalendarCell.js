import React, { Component } from 'react';
import './CalendarCell.css';

class CalendarCell extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSearching: false,
      searchResult: null,
      hour: props.hour
    }

    this.props.search.subscribe(() => {
      this.cellClicked();
    });
  }

  cellClicked() {
    this.setState({ isSearching: true });
    this.setState({ searchResult: null });
    // simulate AJAX request
    setTimeout(() => {
      this.setState({ isSearching: false });
      this.setState({ searchResult: Math.floor(Math.random() * 5) });
    }, 0);
  }

  showSpinner() {
    return this.state.isSearching;
  }
  showHour() {
    return !this.state.isSearching && this.state.searchResult === null;
  }
  showSearchResults() {
    return this.state.searchResult !== null;
  }

  render() {
    const classNames = require('classnames');
    let wrapClass = classNames({
      'goodresults': this.state.searchResult > 3,
      'weakresults': this.state.searchResult >= 1 && this.state.searchResult <= 3,
      'badresults': this.state.searchResult === 0,
      'searching': this.state.isSearching
    });

    return (
      <div className={wrapClass}>
        {
          this.showSpinner() && <div>...</div>
        }
        {
          this.showHour() && <div className="time">{this.state.hour}:00</div>
        }
        {
          this.showSearchResults() &&
          (
            <div onClick={this.cellClicked.bind(this)}>
              <div>{this.state.searchResult}</div>
              <div className="result-label">results</div>
            </div>
          )
        }
      </div>
    );
  }
}

export default CalendarCell;