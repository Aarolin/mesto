class ImageModal {
    constructor(data) {
        this._link = data.link;
        this._name = data.name;
        this._element = document.querySelector('.image-popup');
        this._figure = this._element.querySelector('.popup__figure');
        this._image = this._figure.querySelector('.popup__image');
        this._modificator = 'popup_visible';
    }

    //Заполнение необходимых полей при открытии модалки
    _fillImageModal() {
        this._image.src = this._link;
        this._image.alt = this._name;
        this._figure.querySelector('.popup__caption').textContent = this._name;
    }

    //Закрытие на кнопку закрыть
    _handleButtonClose() {
        this._element.querySelector('.button-close').addEventListener('click', () => {
            this._closeModal();
        });
    }

    //Overlay закрытие
    _handleBackgroundClose() {
        this._element.querySelector('.popup__background').addEventListener('click', () => {
            this._closeModal();
        });
    }

    //Установка необходимых слушателей
    _setEventListeners() {
        document.addEventListener('keydown', documentKeyDawnListener);
        this._handleButtonClose();
        this._handleBackgroundClose();
    }

    openModal() {
        this._element.classList.add(this._modificator);
        this._element.querySelector('.popup__background').classList.add('popup__background_painted');
        this._setEventListeners();
        this._fillImageModal();
    }

    //Событие при закрытие модалки
    _closeModal() {
        this._element.classList.remove(this._modificator);
        this._element.querySelector('.popup__background').classList.remove('popup__background_painted');
        document.removeEventListener('keydown', documentKeyDawnListener);
    }

}

//Закрытие на кнопку Escape
function documentKeyDawnListener(evt) {
    if (evt.key === 'Escape') {
        document.querySelector('.image-popup').classList.remove('popup_visible');
        document.removeEventListener('keydown', documentKeyDawnListener);
    }
}

export default ImageModal;