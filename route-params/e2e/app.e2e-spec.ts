import { RouteParamsPage } from './app.po';

describe('route-params App', function() {
  let page: RouteParamsPage;

  beforeEach(() => {
    page = new RouteParamsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
