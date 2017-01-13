import { Ng2PublicSitePage } from './app.po';

describe('ng-cli-starter App', () => {
  let page: Ng2PublicSitePage;

  beforeEach(() => {
    page = new Ng2PublicSitePage();
    page.navigateTo();
  });

  it('should have an app-header component', () => {
    expect(page.getHeaderComponent()).toBeDefined();
  });

  it('should have an app-footer component', () => {
    expect(page.getFooterComponent()).toBeDefined();
  });

  describe('navigation is built properly', () => {
    it('should have two links', () => {
      expect(page.getNavLinkList().count()).toEqual(5);
    });

    it('should have a link to default page', () => {
      const linkList = page.getNavLinkList();
      expect(linkList.get(0).getText()).toEqual('EXCELERATION DESIGNS');
    });

    it('should have a link to home page', () => {
      const linkList = page.getNavLinkList();
      expect(linkList.get(1).getText()).toEqual('HOME');
    });

    it('should have a link to about page', () => {
      const linkList = page.getNavLinkList();
      expect(linkList.get(2).getText()).toEqual('ABOUT');
    });
  });

  describe('navigation switches pages', () => {
    it('should have a link to home page', () => {
      page.getNavLinkList().get(0).click().then(() => {
        expect(page.getHomePageComponent().getText()).toEqual('Home');
      });
    });

    it('should have a link to about page', () => {
      page.getNavLinkList().get(2).click().then(() => {
        expect(page.getAboutPageComponent().getText()).toEqual('About');
      });
    });
  });

  describe('language control is built properly', () => {
    it('should have two links', () => {
      expect(page.getLangListArray().count()).toEqual(2);
    });
  });
});
