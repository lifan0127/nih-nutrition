import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { NihNutritionAppComponent } from '../app/nih-nutrition.component';

beforeEachProviders(() => [NihNutritionAppComponent]);

describe('App: NihNutrition', () => {
  it('should create the app',
      inject([NihNutritionAppComponent], (app: NihNutritionAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'nih-nutrition works!\'',
      inject([NihNutritionAppComponent], (app: NihNutritionAppComponent) => {
    expect(app.title).toEqual('nih-nutrition works!');
  }));
});
