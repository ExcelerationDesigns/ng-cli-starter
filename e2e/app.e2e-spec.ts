import { Ng2PublicSitePage } from './app.po';

describe('ng2-public-site App', () => {
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
      expect(page.getNavLinkList().count()).toEqual(2);
    });

    it('should have a link to home page', () => {
      let linkList = page.getNavLinkList();
      expect(linkList.get(0).getText()).toEqual('Home');
    });

    it('should have a link to about page', () => {
      let linkList = page.getNavLinkList();
      expect(linkList.get(1).getText()).toEqual('About');
    });
  });

  describe('navigation switches pages', () => {
    it('should have a link to home page', () => {
      page.getNavLinkList().get(0).click().then(() => {
        expect(page.getHomePageComponent().getText()).toEqual('Home');
      });
    });

    it('should have a link to about page', () => {
      page.getNavLinkList().get(1).click().then(() => {
        expect(page.getAboutPageComponent().getText()).toEqual('About');
      });
    });
  });

  describe('language control is built properly', () => {
    it('should have two links', () => {
      expect(page.getLangListArray().count()).toEqual(2);
    });

    it('should have a link to English - United States', () => {
      let linkList = page.getLangListArray();
      expect(linkList.get(0).getText()).toContain('United States');
    });

    it('should have a link to English - United Kingdom', () => {
      let linkList = page.getLangListArray();
      expect(linkList.get(1).getText()).toContain('United Kingdom');
    });
  });
});
