export default class Section {
    constructor({data, renderer}, containerSelector) {
        this._renderItems = data;
        this._container = document.querySelector(containerSelector);
        this._renderer = renderer;
    }

    addItem(element) {
        this._container.append(element);
    }

    renderItems() {
        this._renderItems.forEach(element => {
            this._renderer(element);
        });
    }
}