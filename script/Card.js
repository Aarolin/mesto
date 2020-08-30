import ImageModal from './ImageModal.js';

class Card {
    constructor(data, templateSelector) {
        this._data = data;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        return document.querySelector(`#${this._templateSelector}`);
    }

    _handleCardImageClick() {
        this._element.querySelector('.elements__image').addEventListener('click', () => {
            const imageModal = new ImageModal(this._data, 'image-popup');
            imageModal.openModal();
        });
    }

    _handleLikeClick() {
        const likeButton = this._element.querySelector('.elements__like');
        likeButton.addEventListener('click', () => {
            likeButton.classList.toggle('elements__like_disabled');
            likeButton.classList.toggle('elements__like_active');
        });
    }

    _handleDeleteCardClick() {
        const deleteButton = this._element.querySelector('.elements__recycle-bin');
        deleteButton.addEventListener('click', () => {
            deleteButton.closest('.elements__item').remove();
        });
    }

    _setEventListeners() {        
        this._handleCardImageClick();
        this._handleLikeClick();
        this._handleDeleteCardClick();
    }

    createCard() {
        const template = this._getTemplate().content;
        this._element = template.cloneNode(true);
        this._setEventListeners();
        this._element.querySelector('.elements__header').textContent = this._data.name;
        this._element.querySelector('.elements__image').src = this._data.link;
        this._element.querySelector('.elements__image').alt = this._data.name;
        return this._element;
    }
}

export default Card;