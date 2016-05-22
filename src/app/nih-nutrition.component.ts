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
    MdIcon
  ],
  providers: [MdIconRegistry, MdRadioDispatcher],

})
export class NihNutritionAppComponent {
  title = 'Analysis of NIH Spending on Nutrition Research';
  visuals: Object[] = [
    {
      title: "Timeline", 
      description: "Timeline to visualize NIH press releases on nutrition-related topics."
    },
    {
      title: "Spending",
      description: "NIH spending trend on nutrition-related researches."
    },
    {
      title: "Project",
      description: "NIH-sponsored research projects in nutrition research."
    },
    {
      title: "Organization",
      description: "Overview of organizations supported by NIH grant."
    }
  ];
}