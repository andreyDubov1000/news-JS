import News from './news/news';
import Sources from './sources/sources';

/// <reference path = "form-namespace.ts"/>

export class AppView {
    news: News;

    sources: Sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews<T extends Form.DataItemsNews>(data?: T): void {
        const values = data?.articles ? data.articles : [];
        this.news.draw(values);
    }

    drawSources<T extends Form.DataItemsSources>(data?: T): void {
        const values = data?.sources ? data.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
