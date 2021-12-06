import './news.css';

/// <reference path = "../form-namespace.ts"/>

class News {
    draw<DataNews extends Form.NewsItem>(data: Array<DataNews>): void {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;
        const sources: HTMLDivElement = document.querySelector('.sources')!;
        sources.style.height = '110px';
        const fragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement = document.querySelector('#newsItemTemp')!;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLDivElement;
            const newsPhoto: HTMLDivElement = newsClone.querySelector('.news__meta-photo')!;
            const newsAuthor: HTMLLIElement = newsClone.querySelector('.news__meta-author')!;
            const newsDate: HTMLLIElement = newsClone.querySelector('.news__meta-date')!;
            const newsTitle: HTMLElement = newsClone.querySelector('.news__description-title')!;
            const newsSource: HTMLElement = newsClone.querySelector('.news__description-source')!;
            const newsContent: HTMLElement = newsClone.querySelector('.news__description-content')!;
            const newsReadMore: HTMLAnchorElement = newsClone.querySelector('.news__read-more a')!;

            if (idx % 2) newsClone.querySelector('.news__item')!.classList.add('alt');

            newsPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            newsAuthor.textContent = item.author || item.source.name;
            newsDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            newsTitle.textContent = item.title;
            newsSource.textContent = item.source.name;
            newsContent.textContent = item.description;
            newsReadMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        document.querySelector('.news')!.innerHTML = '';
        document.querySelector('.news')!.appendChild(fragment);
    }
}

export default News;
