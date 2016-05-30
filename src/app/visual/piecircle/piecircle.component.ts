import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { themes, theme, topic } from '../../shared/theme.interface';

@Component({
  moduleId: module.id,
  selector: 'app-piecircle',
  templateUrl: 'piecircle.component.html',
  styleUrls: ['piecircle.component.css']
})
export class PiecircleComponent implements OnInit {
  @Input() themes: Observable<themes>;
  title: string;
  description: string;
  data: theme[];
  questions: string[];
  topics = [];
  circleRadius = 182;
  selectedTopic: topic

  constructor() {}

  ngOnInit() {
    this.themes
    .subscribe(themes => {
      this.title = themes.title;
      this.description = themes.description;
      this.data = themes.data;
      this.data.forEach(question => {
        this.topics = this.topics.concat(question.topics);
      });
      this.topics.map((topic, index) => {
        let coord = this.circleCoord(index, this.topics.length);
        topic.x = coord.x;
        topic.y = coord.y;
        return topic
      })
    })
  }
  
  circleCoord(index, total){
    let increment = Math.PI * 2 / total;
    let xOffset = Math.cos(Math.PI/2 - increment * (0.5 + index)) * this.circleRadius;
    let yOffset = Math.sin(Math.PI/2 - increment * (0.5 + index)) * this.circleRadius;
    return { x: xOffset, y: yOffset }
  }
  
  addHighlight(index) {
    this.selectedTopic = this.topics[index];
  }
  
  removeHighlight(index) {
    // this.selectedTopic = null;
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
}
