import { NgBpPage } from './app.po';

describe('ng-bp App', function() {
  let page: NgBpPage;

  beforeEach(() => {
    page = new NgBpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
