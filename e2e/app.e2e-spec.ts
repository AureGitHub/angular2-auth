import { MiAplicacionPage } from './app.po';

describe('mi-aplicacion App', function() {
  let page: MiAplicacionPage;

  beforeEach(() => {
    page = new MiAplicacionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
