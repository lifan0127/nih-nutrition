
import { Component, OnInit, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { Observable } from 'rxjs/Observable';

import { events, event } from '../../shared/event.interface';
import { Iscroll } from '../../shared/iscroll.directive';
import { ToDate } from '../../shared/to-date.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-timeline',
  templateUrl: 'timeline.component.html',
  styleUrls: ['timeline.component.css'],
  directives: [
    Iscroll
  ],
  pipes: [
    ToDate
  ]
})
export class TimelineComponent implements OnInit {
  @Input() events: Observable<events>;
  multiplier = 3;
  title: string;
  description: string;
  data: event[];
  selectedEvent: event;
  highlightedEvent: event;
  keyterm = '';
  
  months = [
    {'mon': 'Jan', 'pos': 0}, {'mon': 'Feb', 'pos': 31}, {'mon': 'Mar', 'pos': 59}, 
    {'mon': 'Apr', 'pos': 90}, {'mon': 'May', 'pos': 120}, {'mon': 'Jun', 'pos': 151}, 
    {'mon': 'Jul', 'pos': 181}, {'mon': 'Aug', 'pos': 212}, {'mon': 'Sept', 'pos': 243}, 
    {'mon': 'Oct', 'pos': 273}, {'mon': 'Nov', 'pos': 304}, {'mon': 'Dec', 'pos': 334}
  ]

  ngOnInit(){
    this.events
    .subscribe(events => {
      this.title = events.title;
      this.description = events.description;
      this.data = events.data;
      this.selectedEvent = this.data[0];
    })
  }
  
  stringDivider(string, width) {
    if (string.length>width) {
		var p=width
        while (p>0 && !/\s/.test(string[p])) {
			p--;
        }
        if (p>0) {
            var left = [string.substring(0, p)];
            var right = string.substring(p+1);
            return left.concat(this.stringDivider(right, width));
        }
    }
    return [string];
  }
  
  getDayInYear(dateJSON: string) {
    let date = new Date(dateJSON);
    return this.months[date.getMonth()].pos + date.getDate() - 1
  }
  
  selectEvent(index) {
    this.selectedEvent = this.highlightedEvent;
  }
  
  addHighlight(index) {
    this.highlightedEvent = this.data[index];
  }
  
  removeHighlight(index) {
    // this.highlightedEvent = null;
  }
}