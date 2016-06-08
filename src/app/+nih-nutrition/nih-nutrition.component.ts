import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TimelineComponent } from '../visual/timeline';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-nih-nutrition',
  templateUrl: 'nih-nutrition.component.html',
  styleUrls: ['nih-nutrition.component.css'],
  directives: [
    TimelineComponent,
    MD_CARD_DIRECTIVES
  ]
})
export class NihNutritionComponent implements OnInit {
  entry = {
      title: 'Breakthroughs & Significant Events', 
      description: 'Timeline to visualize NIH breakthroughs and significant events on nutrition-related topics.',
      source: 'nih-events.json',
      visual: 'timeline-nih-events'
    }
  constructor(
    private http: Http
  ) {}

  ngOnInit() {
    this.entry['data'] = this.http.get('data/' + this.entry.source)
                               .map(res => res.json())
  }
  

}
