import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';
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
import { NihNutritionComponent } from './+nih-nutrition';
import { VisualGalleryComponent } from './+visual-gallery';
import { ModalWindowComponent } from './modal-window';
import { ModalWindowService } from './modal-window.service';


@Component({
  moduleId: module.id,
  selector: 'nih-nutrition-app',
  templateUrl: 'nih-nutrition.component.html',
  styleUrls: ['nih-nutrition.component.css'],
  directives: [
    ROUTER_DIRECTIVES,
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
    MdIcon,
    ModalWindowComponent
  ],
  providers: [
    MdIconRegistry, 
    MdRadioDispatcher,
    ModalWindowService
  ]
})
@Routes([
  {path: '/nih-nutrition', component: NihNutritionComponent},
  {path: '/visual-gallery', component: VisualGalleryComponent}

])
export class NihNutritionAppComponent {
  title = 'Analysis of NIH Spending on Nutrition Research';
  entry: {title: string, description: string, source: string, visual: string};
  modal = false;
  view = 'visual';
  
  views: Object[] = [
    {
      name: 'NIH Nutrition',
      description: 'NIH-sponsored nutrition research',
      icon: 'assignment ind',
      route: '/nih-nutrition'
    },
    {
      name: 'Visual Gallery',
      description: 'Data visualization gallery',
      icon: 'pets',
      route: '/visual-gallery'
    }
  ];
  
  constructor(
    private router: Router,
    private modalWindowService: ModalWindowService
  ) {
    modalWindowService.modalWinodwInput$.subscribe(
      input => {
        this.entry = input.entry;
        this.view = input.view;
      }
    )
    modalWindowService.modalWindowStatus$.subscribe(
      status => {
        this.modal = status;
      }
    )
   }
  
  ngOnInit() {
    this.router.navigate(['/visual-gallery'])
    // this.modalWindowService
  }
  
  closeModal(event) {
    this.modalWindowService.updateStatus(false);
  }

}