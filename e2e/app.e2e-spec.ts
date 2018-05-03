import { AppPage } from './app.po';

describe('jt-youtube App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Should display The Jonathan Tedford Band', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('The Jonathan Tedford Band');
  });

  it('Should display the youtube videos', () => {
    page.navigateToVideos();
    expect(page.getYoutubeVideo()).toBeTruthy();
  });
});
