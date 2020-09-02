const popupWithImage = document.querySelector('.popup-image');
const popupBackground = popupWithImage.querySelector('.popup__background');
const popupCaption = popupImage.querySelector('.popup__caption');
const popupImage = popupWithImage.querySelector('.popup__image');
const buttonClosePopupWithImage = popupWithImage.querySelector('.button-close');

//Закрытие на модалок на кнопку Escape
function addDocumentKeyDownListener(evt) {
    if (evt.key === 'Escape') {
      toggleModal(popupOpened(popups));
      document.removeEventListener('keydown', addDocumentKeyDownListener);
    }
  }
  

function handleOpenCardImageEventListener(card) {
    const cardImage = card.querySelector('.elements__image');
    cardImage.addEventListener('.click', () => {
        popupWithImage.classList.add('popup_visible');
        popupBackground.addEventListener('keyup', addDocumentKeyDownListener);
        popupBackground.addEventListener('click', () => {
            popupWithImage.classList.remove('popup_visible');
        });
        popupBackground.classList.add('popup__background_painted');
        popupCaption.textContent = cardImage.alt;
        popupImage.src = cardImage.src; 
        popupImage.alt = cardImage.alt;
        popupWithImage.addEventListener('keyup', addDocumentKeyDownListener)
    });
}

buttonClosePopupWithImage.addEventListener('click', () => {
    popupWithImage.classList.remove('popup_visible');
    popupBackground.removeEventListener('keyup', addDocumentKeyDownListener);
    popupBackground.classList.remove('popup__background_painted');
});

