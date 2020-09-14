import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._element.querySelector('.popup__image');
        this._caption = this._element.querySelector('.popup__caption');
    }
    open(cardImageSrc, caption) {
        this._image.src = cardImageSrc;
        this._image.alt = caption;
        this._caption.textContent = caption;
        super.open();
    }
}