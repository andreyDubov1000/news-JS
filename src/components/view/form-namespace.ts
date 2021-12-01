namespace Form {
    export interface NewsItem {
    readonly urlToImage?: string;
    readonly author?: string;
    readonly publishedAt: string;
        readonly title: string;
    readonly description: string;
    readonly url: string;
        readonly source: {
      id: string;
            name: string;
        };
  }
    export interface SourcesItem {
        readonly name: string;
    readonly id: string;
  }

  export interface DataItems {
    articles: Array<NewsItem>;
        sources: Array<SourcesItem>;
  }
}
