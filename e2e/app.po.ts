import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }
  navigateToVideos() {
    return browser.get('/videos');
  }
  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
  getYoutubeVideo() {
    return element(by.tagName('object')).isDisplayed();
  }
  playYoutubeVideo() {
  }
}
