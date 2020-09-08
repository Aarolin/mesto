export default class Section {
    constructor({data, renderer}, containerSelector) {
        this._renderItems = data;
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    }

    setItem(element) {
        this._container.append(element);
    }

    clear() {
        this._container.clear();
    }

    renderItems() {
        this._renderItems.forEach(element => {
            this._renderer(element);
        });
    }
}