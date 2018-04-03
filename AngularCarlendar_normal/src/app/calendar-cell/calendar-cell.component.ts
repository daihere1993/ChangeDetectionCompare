import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

interface Istatus {
  isSearching: boolean,
  searchResults: {
    options: any
  }
}

@Component({
  selector: 'calendar-cell',
  templateUrl: './calendar-cell.component.html',
  styleUrls: ['./calendar-cell.component.css']
})
export class CalendarCellComponent implements OnInit {

  @Input() hour: number;
  @Input('search') search$: Subject<any>;

  status: Istatus = {
    isSearching: false,
    searchResults: {
      options: null
    }
  };

  private isReady: boolean = false;


  constructor() {
  }

  ngOnInit() {
    this.search$.subscribe(() => {
      this.cellClicked();
    });
  }

  cellClicked(isClick: boolean = false): void {
    this.status.searchResults.options = null;
    this.status.isSearching = true;
    // simulate AJAX request
    setTimeout(() => {
      this.status.isSearching = false;
      this.status.searchResults = {
        options: Math.floor(Math.random() * 5)
      };
    }, 0);
  }

  showSpinner() {
    return this.status.isSearching;
  }
  showHour() {
    return !this.status.isSearching && this.status.searchResults.options === null;
  }
  showSearchResults() {
    return this.status.searchResults.options !== null;
  }

}
