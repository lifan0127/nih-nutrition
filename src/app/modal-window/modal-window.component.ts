/// <reference path="../../typings.d.ts" />
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

@Component({
  moduleId: module.id,
  selector: 'app-modal-window',
  templateUrl: 'modal-window.component.html',
  styleUrls: ['modal-window.component.css'],
  directives: [
    MdIcon
  ],
  providers: [MdIconRegistry]
})
export class ModalWindowComponent implements OnInit {
  @Input() entry: {id: string, type: string};
  @Output() close = new EventEmitter();
  constructor() {}

  ngOnInit() {
  }
  
  closeModal() {
    this.close.emit(false);
  }

}
