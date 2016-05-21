export class NihNutritionPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('nih-nutrition-app h1')).getText();
  }
}
