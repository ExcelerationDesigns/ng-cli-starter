import { browser, element, by } from 'protractor';

export class Ng2PublicSitePage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderComponent() {
    return element(by.css('app-header')).getText();
  }

  getFooterComponent() {
    return element(by.css('app-footer')).getText();
  }

  getNavLinkList() {
    return element.all(by.css('app-root nav a'));
  }

  getLangListArray() {
    return element.all(by.css('md-list-item'));
  }

  getHomePageComponent() {
    return element(by.css('app-root app-home-page'));
  }

  getAboutPageComponent() {
    return element(by.css('app-root app-about-page'));
  }
}
