const popupWithImage = document.querySelector('.image-popup');
const popupCaption = popupWithImage.querySelector('.popup__caption');
const popupImage = popupWithImage.querySelector('.popup__image');

function toggleModal(modalWindow) {
  modalWindow.classList.toggle('popup_visible');
}

//Закрытие на модалок на кнопку Escape
function addDocumentKeyDownListener(evt) {
    if (evt.key === 'Escape') {
      const popupActive = document.querySelector('.popup_visible');
      toggleModal(popupActive);
      document.removeEventListener('keyup', addDocumentKeyDownListener);
    }
  }
  
function handleOpenCardImageEventListener(card) {
    const cardImage = card.querySelector('.elements__image');
    cardImage.addEventListener('click', () => {
        popupWithImage.classList.add('popup_visible');
        popupCaption.textContent = cardImage.alt;
        popupImage.src = cardImage.src; 
        popupImage.alt = cardImage.alt;
        document.addEventListener('keyup', addDocumentKeyDownListener)
    });
}

export {addDocumentKeyDownListener, handleOpenCardImageEventListener, toggleModal};

