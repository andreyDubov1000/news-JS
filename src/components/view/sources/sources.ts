import './sources.css';
/// <reference path = "../form-namespace.ts"/>
class Sources {
    draw<DataSources extends Form.SourcesItem>(data: Array<DataSources>): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement = document.querySelector('#sourceItemTemp')!;
        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as HTMLDivElement;
            const sourceName: HTMLSpanElement = sourceClone.querySelector('.source__item-name')!;
            const sourceItem: HTMLDivElement = sourceClone.querySelector('.source__item')!;
            sourceName.textContent = item.name;
            sourceItem.setAttribute('data-source-id', item.id);
            fragment.append(sourceClone);
        });
        document.querySelector('.sources')!.append(fragment);
    }
}
export default Sources;
