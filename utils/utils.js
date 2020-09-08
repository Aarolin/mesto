import {profilePopup, profileName, profileAboutSelf, inputName, inputJob} from './constants.js';
import {placePopup, placeFormEdit, placeName, placeReference} from './constants.js';
import {popupWithImage, popupCaption, popupImage} from './constants.js';
import {usersCards} from './constants.js';
import Card from '../components/Card.js';

export function toggleModal(modalWindow) {
  modalWindow.classList.toggle('popup_visible');
}

//Закрытие на модалок на кнопку Escape
export function addDocumentKeyDownListener(evt) {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_visible');
    toggleModal(popupActive);
    document.removeEventListener('keyup', addDocumentKeyDownListener);
  }
}

export function handleOpenCardImageEventListener(card) {
  const cardImage = card.querySelector('.elements__image');
  cardImage.addEventListener('click', () => {
    popupWithImage.classList.add('popup_visible');
    popupCaption.textContent = cardImage.alt;
    popupImage.src = cardImage.src;
    popupImage.alt = cardImage.alt;
    document.addEventListener('keyup', addDocumentKeyDownListener)
  });
}

export function addCard(card) {
  usersCards.prepend(card);
}

export function ProfileSubmitHandler() {
  profileName.textContent = inputName.value;
  profileAboutSelf.textContent = inputJob.value;
  toggleModal(profilePopup);
  document.removeEventListener('keyup', addDocumentKeyDownListener);
}

export function addPlaceSubmitHandler() {
  addCard((new Card({ name: placeName.value, link: placeReference.value }, 'place-card')).createCard());
  toggleModal(placePopup);
  placeFormEdit.reset();
  document.removeEventListener('keyup', addDocumentKeyDownListener);
}

export function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_visible');
}