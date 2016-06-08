import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { PiecircleComponent } from '../visual/piecircle';
import { TimelineComponent } from '../visual/timeline';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'app-ichnr-roadmap',
  templateUrl: 'ichnr-roadmap.component.html',
  styleUrls: ['ichnr-roadmap.component.css'],
  directives: [
    PiecircleComponent,
    TimelineComponent,
    MD_CARD_DIRECTIVES
  ]
})
export class IchnrRoadmapComponent implements OnInit {

  entry1 = {
      title: 'US National Nutrition Research Roadmap',
      description: 'Research priorities for human nutrition over the next five to ten years.',
      source: 'nutrition-research-roadmap.json',
      visual: 'piecircle-nutrition-research-roadmap'
    }

  entry2 = {
      title: 'The History of ICHNR (1972 - Present)',
      description: 'A histoical overview of the Interagency Committee on Human Nutrition Research (ICHNR)',
      source: 'ichnr-history.json',
      visual: 'timeline-ichnr-history'
    }
  constructor(
    private http: Http
  ) {}

  ngOnInit() {
    this.entry1['data'] = this.http.get('data/' + this.entry1.source)
                               .map(res => res.json());
    this.entry2['data'] = this.http.get('data/' + this.entry2.source)
                               .map(res => res.json());
  }

}
