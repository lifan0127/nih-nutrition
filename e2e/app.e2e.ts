import { NihNutritionPage } from './app.po';

describe('nih-nutrition App', function() {
  let page: NihNutritionPage;

  beforeEach(() => {
    page = new NihNutritionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('nih-nutrition works!');
  });
});
