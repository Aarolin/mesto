class ImageModal {
    constructor(data, modalSelector) {
        this._data = data;
        this._modalselector = modalSelector;
        this._modificator = 'popup_visible';
    }

    _getModal() {
        return document.querySelector(`.${this._modalselector}`);
    }

    _fillImageModal() {

        const figureImagePopup = this._element.querySelector('.popup__figure');
        const image = figureImagePopup.querySelector('.popup__image');

        image.src = this._data.link;
        image.alt = this._data.name;

        figureImagePopup.querySelector('.popup__caption').textContent = this._data.name;   
    }

    _clearImageModal() {

        const figureImagePopup = this._element.querySelector('.popup__figure');
        const image = figureImagePopup.querySelector('.popup__image');

        image.src = '';
        image.alt = '';

        figureImagePopup.querySelector('.popup__caption').textContent = '';
    }

    _handleButtonClose() {
        this._element.querySelector('.button-close').addEventListener('click', () => {
            this._closeModal();
        });
    }

    _handleBackgroundClose() {
        this._element.querySelector('.popup__background').addEventListener('click', () => {
            this._closeModal();
        });    
    }

    _setEventListeners() {
        document.addEventListener('keydown', documentKeyDawnListener);
        this._handleButtonClose();
        this._handleBackgroundClose();
    }
    
    openModal() {
        this._element = this._getModal();
        this._element.classList.add(this._modificator);
        this._element.querySelector('.popup__background').classList.add('popup__background_painted');
        this._setEventListeners();
        this._fillImageModal();
    }

    _closeModal() {
        this._element = this._getModal();
        this._clearImageModal();
        this._element.querySelector('.popup__background').classList.remove('popup__background_painted');
        document.removeEventListener('keydown', documentKeyDawnListener); 
        this._element.classList.remove(this._modificator);
    }
    
}

function documentKeyDawnListener(evt) {
    if (evt.key === 'Escape') {
        console.log('hello');
        document.querySelector('.image-popup').classList.remove('popup_visible');
        document.removeEventListener('keydown', documentKeyDawnListener);
    }
}

export default ImageModal;

//TODO: Решить проблему с close button;