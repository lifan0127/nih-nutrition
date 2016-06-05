import {
  beforeEach,
  beforeEachProviders,
  describe,
  expect,
  it,
  inject,
} from '@angular/core/testing';
import { ComponentFixture, TestComponentBuilder } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { VisualGalleryComponent } from './visual-gallery.component';

describe('Component: VisualGallery', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [VisualGalleryComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([VisualGalleryComponent],
      (component: VisualGalleryComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(VisualGalleryComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(VisualGalleryComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-visual-gallery></app-visual-gallery>
  `,
  directives: [VisualGalleryComponent]
})
class VisualGalleryComponentTestController {
}

