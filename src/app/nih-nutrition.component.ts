import { Component } from '@angular/core';
import {MdToolbar} from '@angular2-material/toolbar';
import {MdButton} from '@angular2-material/button';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MdInput} from '@angular2-material/input';
import {MdCheckbox} from '@angular2-material/checkbox';
import {MdRadioButton, MdRadioGroup, MdRadioDispatcher} from '@angular2-material/radio';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';

import { ModalWindowComponent } from './modal-window';


@Component({
  moduleId: module.id,
  selector: 'nih-nutrition-app',
  templateUrl: 'nih-nutrition.component.html',
  styleUrls: ['nih-nutrition.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon,
    ModalWindowComponent
  ],
  providers: [MdIconRegistry, MdRadioDispatcher],

})
export class NihNutritionAppComponent {
  title = 'Analysis of NIH Spending on Nutrition Research';
  visuals: Object[] = [
    {
      title: 'Breakthroughs & Significant Events', 
      description: 'Timeline to visualize NIH breakthroughs and significant events on nutrition-related topics.',
      source: 'nih-event-timeline.json',
      visual: 'timeline'
    },
    {
      title: 'NIH Funding Trends in Nutrition Research',
      description: 'Comparison of NIH research funding trends in various nutrition-related areas.',
      source: 'nih-spending-trend.json',
      visual: 'barchart'
    },
    {
      title: 'Overview of NIH-Sponsored Projects',
      description: 'Overview of NIH-sponsored research projects to advance our understanding in nutrition science.',
      source: 'nih-project-overview.json',
      visual: 'linechart'
    },
    {
      title: 'Geographical Distribution of NIH Organizations',
      description: 'Geographical distribution of organizations supported by NIH grant in the United States.',
      source: 'nih-funded-organizations.json',
      visual: 'map'
    }
  ];
  entry: {title: string, description: string, source: string, visual: string};
  modal = false;
  view = 'visual';
  
  openModal(entry, view) {
    this.entry = entry;
    this.view = view;
    this.modal = true;
  }
  
  closeModal(event) {
    this.modal = false;
  }
}