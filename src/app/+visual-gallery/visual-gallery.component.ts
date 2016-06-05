import { Component, OnInit } from '@angular/core';
import { MdToolbar} from '@angular2-material/toolbar';
import { MdButton } from '@angular2-material/button';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { MD_TABS_DIRECTIVES } from '@angular2-material/tabs/tabs';
import { MD_LIST_DIRECTIVES } from '@angular2-material/list';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MdInput } from '@angular2-material/input';
import { MdCheckbox } from '@angular2-material/checkbox';
import { MdRadioButton, MdRadioGroup, MdRadioDispatcher } from '@angular2-material/radio';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';
// import { ModalWindowService } from '../shared/modal-window.service';

@Component({
  moduleId: module.id,
  selector: 'app-visual-gallery',
  templateUrl: 'visual-gallery.component.html',
  styleUrls: ['visual-gallery.component.css'],
  directives: [
    MD_SIDENAV_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_TABS_DIRECTIVES,
    MdToolbar,
    MdButton,
    MdInput,
    MdCheckbox,
    MdRadioGroup,
    MdRadioButton,
    MdIcon
  ],
  providers: [MdIconRegistry, MdRadioDispatcher]
})
export class VisualGalleryComponent implements OnInit {
  title = 'Analysis of NIH Spending on Nutrition Research';
  visuals: Object[] = [
    {
      title: 'Breakthroughs & Significant Events', 
      description: 'Timeline to visualize NIH breakthroughs and significant events on nutrition-related topics.',
      source: 'nih-events.json',
      visual: 'timeline-nih-events'
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
    },
    {
      title: 'US National Nutrition Research Roadmap',
      description: 'Research priorities for human nutrition over the next five to ten years.',
      source: 'nutrition-research-roadmap.json',
      visual: 'piecircle-nutrition-research-roadmap'
    }
  ];

  
  constructor(
    // private modalWindowService: ModalWindowService
  ) {}

  ngOnInit() {
  }
  
  openModal(entry, view) {
    // this.modalWindowService.updateInput({
    //   'entry': entry,
    //   'view': view
    // });
    // this.modalWindowService.updateStatus(true);
  }

  // closeModal(event) {
  //   this.modal = false;
  // }
}
