import { CodingbloggersPage } from './app.po';

describe('codingbloggers App', function() {
  let page: CodingbloggersPage;

  beforeEach(() => {
    page = new CodingbloggersPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
