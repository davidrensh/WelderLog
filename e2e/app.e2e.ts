import { WelderlogPage } from './app.po';

describe('welderlog App', function() {
  let page: WelderlogPage;

  beforeEach(() => {
    page = new WelderlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('welderlog works!');
  });
});
