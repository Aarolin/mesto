class Card {
    constructor(data, templateSelector, handleCardClick, handleDeleteIconClick, handleAddLikeClick, handleDeleteClick) {
        this._data = data;
        this._templateSelector = templateSelector;
        this._handleCardClick = handleCardClick;
        this._element = this._getTemplate();
        this._image = this._element.querySelector('.elements__image');
        this._header = this._element.querySelector('.elements__header');
        this._buttonDelete = this._element.querySelector('.elements__recycle-bin');
        this._handleDeleteIconClick = handleDeleteIconClick;
        this._handleAddLikeClick = handleAddLikeClick;
        this._handleDeleteClick = handleDeleteClick;
        this._likesCounter = this._element.querySelector('.elements__like-counter');
        this._userId = '2fe4b2a37508ea9221181f72';
    }

    _getTemplate() {
        return document.querySelector(this._templateSelector).content.cloneNode(true);
    }

    _LikeClick() {
        const likeButton = this._element.querySelector('.elements__like');
        likeButton.addEventListener('click', () => {
            if(likeButton.classList.contains('elements__like_disabled')) {
                likeButton.classList.add('elements__like_active');
                likeButton.classList.remove('elements__like_disabled');
                this._handleAddLikeClick();
            }
            else if(likeButton.classList.contains('elements__like_active')) {
                likeButton.classList.remove('elements__like_active');
                likeButton.classList.add('elements__like_disabled');
                this._handleDeleteClick();
            }
        });
    }

    _hideButtonDelete() {
        if(this._data.owner._id != this._userId) {
            this._buttonDelete.classList.add('elements__recycle-bin_invisible');
        }
    }

    _setEventListeners() {        
        this._image.addEventListener('click', () => {
            this._handleCardClick(this._image.src, this._header.textContent);
        });
        this._buttonDelete.addEventListener('click', () => {
            this._handleDeleteIconClick();
        }); 
        this._LikeClick();
    }

    removeCard() {
        this._buttonDelete.closest('.elements__item').remove();
    }

    updateCard(likes) {
        this._likesCounter.textContent = likes.length;
    }

    createCard() {
        this._setEventListeners();
        this._hideButtonDelete();
        this._header.textContent = this._data.name;
        this._image.src = this._data.link;
        this._image.alt = this._data.name;
        this._likesCounter.textContent = this._data.likes.length;
        return this._element;
    }
}

export default Card;