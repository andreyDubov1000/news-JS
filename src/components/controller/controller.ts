import AppLoader from './appLoader';
/// <reference path = "form-namespace.ts"/>

type Callback = <DI extends Form.DataItems>(o?: DI) => void;

class AppController extends AppLoader {
    getSources(callback: Callback): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: Callback): void {
        let target = e?.target as HTMLElement;
        const newsContainer = e?.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id')!;
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentElement!;
        }
    }
}

export default AppController;
