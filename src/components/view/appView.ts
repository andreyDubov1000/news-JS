import News from './news/news';
import Sources from './sources/sources';

/// <reference path = "form-namespace.ts"/>

export class AppView {
    news: News;

    sources: Sources;

  constructor() {
    this.news = new News()
    this.sources = new Sources()
  }

  drawNews<T extends { articles: Array<Form.NewsItem> }>(data?: T):void {
        const values = data?.articles ? data.articles : []
    this.news.draw(values)
  }

  drawSources<T extends { sources: Array<Form.SourcesItem> }>(data?: T):void {
    const values = data?.sources ? data.sources : [];
    this.sources.draw(values);
  }
}

export default AppView;
