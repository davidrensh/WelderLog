export class WelderlogPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('welderlog-app h1')).getText();
  }
}
