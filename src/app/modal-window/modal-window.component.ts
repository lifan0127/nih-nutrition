/// <reference path="../../typings.d.ts" />
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Http } from '@angular/http';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
import { TimelineComponent } from '../visual/timeline';
import { JsonViewerComponent } from '../shared/json-viewer';

@Component({
  moduleId: module.id,
  selector: 'app-modal-window',
  templateUrl: 'modal-window.component.html',
  styleUrls: ['modal-window.component.css'],
  directives: [
    MdIcon,
    JsonViewerComponent,
    TimelineComponent
  ],
  providers: [MdIconRegistry]
})
export class ModalWindowComponent implements OnInit {
  @Input() entry: {title: string, description: string, source: string, visual: string, data?: Object};
  @Input() view: string;
  @Output() close = new EventEmitter();
  constructor(
    private http: Http
  ) {}

  ngOnInit() {
    this.entry.data = this.http.get('data/' + this.entry.source)
                               .map(res => res.json())
  }
  
  closeModal() {
    this.close.emit(false);
  }

}
