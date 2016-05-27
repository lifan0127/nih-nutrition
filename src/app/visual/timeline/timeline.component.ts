
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { events, event } from '../../shared/event.interface';
import { Iscroll } from '../../shared/iscroll.directive';

@Component({
  moduleId: module.id,
  selector: 'app-timeline',
  templateUrl: 'timeline.component.html',
  styleUrls: ['timeline.component.css'],
  directives: [
    Iscroll
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
      this.data.forEach(item => {
        item.title = item.title.length > 64 ? item.title.slice(0, 61) + '...' : item.title;
      });
      this.selectedEvent = this.data[0];
    })
  }
  
  getDayOfYear(dateJSON: string) {
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