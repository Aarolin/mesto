// import {handleOpenCardImageEventListener} from '../utils/utils.js';

class Card {
    constructor(data, templateSelector, handleCardClick) {
        this._data = data;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.elements__image');
        this._header = this._element.querySelector('.elements__header');
    }

    _getTemplate() {
        return document.querySelector(this._templateSelector).content.cloneNode(true);
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
        this._image.addEventListener('click', () => {
            this._handleCardClick(this._image.src, this._header.textContent);
        }); 
        this._handleLikeClick();
        this._handleDeleteCardClick();
    }

    createCard() {
        this._setEventListeners(); 
        this._header.textContent = this._data.name;
        this._image.src = this._data.link;
        this._image.alt = this._data.name;
        return this._element;
    }
}

export default Card;