export default class Popup {
    constructor(popupSelector) {
        this._element = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    open() {
        this._element.classList.add('popup_visible');
        document.addEventListener('keyup', this._handleEscClose);
    }
    close() {
        this._element.classList.remove('popup_visible');
    }
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
            document.removeEventListener('keyup', this._handleEscClose);
        }
    }
    setEventListeners() {
        this._element.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('button-close') || evt.target.classList.contains('popup__background')) {
                this.close();
            }
        });
    }
}