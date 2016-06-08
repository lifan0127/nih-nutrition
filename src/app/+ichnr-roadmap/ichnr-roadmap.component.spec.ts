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
import { IchnrRoadmapComponent } from './ichnr-roadmap.component';

describe('Component: IchnrRoadmap', () => {
  let builder: TestComponentBuilder;

  beforeEachProviders(() => [IchnrRoadmapComponent]);
  beforeEach(inject([TestComponentBuilder], function (tcb: TestComponentBuilder) {
    builder = tcb;
  }));

  it('should inject the component', inject([IchnrRoadmapComponent],
      (component: IchnrRoadmapComponent) => {
    expect(component).toBeTruthy();
  }));

  it('should create the component', inject([], () => {
    return builder.createAsync(IchnrRoadmapComponentTestController)
      .then((fixture: ComponentFixture<any>) => {
        let query = fixture.debugElement.query(By.directive(IchnrRoadmapComponent));
        expect(query).toBeTruthy();
        expect(query.componentInstance).toBeTruthy();
      });
  }));
});

@Component({
  selector: 'test',
  template: `
    <app-ichnr-roadmap></app-ichnr-roadmap>
  `,
  directives: [IchnrRoadmapComponent]
})
class IchnrRoadmapComponentTestController {
}

