import {handleOpenCardImageEventListener} from '../utils/utils.js';

class Card {
    constructor(data, templateSelector) {
        this._data = data;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        return document.querySelector(`#${this._templateSelector}`).content.cloneNode(true);
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
        handleOpenCardImageEventListener(this._element);
        this._handleLikeClick();
        this._handleDeleteCardClick();
    }

    createCard() {
        this._element = this._getTemplate();
        this._setEventListeners();
        const elementImage = this._element.querySelector('.elements__image');
        const elementHeader = this._element.querySelector('.elements__header'); 
        elementHeader.textContent = this._data.name;
        elementImage.src = this._data.link;
        elementImage.alt = this._data.name;
        return this._element;
    }
}

export default Card;