import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {addDocumentKeyDownListener, toggleModal, ProfileSubmitHandler, addPlaceSubmitHandler, addCard, closeModalWindow} from '../utils/utils.js';
import {profileFormEdit, placeFormEdit} from '../utils/constants.js';
import {inputName, inputJob, profileName, profileAboutSelf} from '../utils/constants.js';
import {initialCards} from '../utils/constants.js';
import {popups, profilePopup, placePopup} from '../utils/constants.js';
import {profileEdit, addPlace} from '../utils/constants.js';
import {validateObject} from '../utils/constants.js';

//Объект для валидации формы с профилем
const profileValidator = new FormValidator(validateObject, profileFormEdit);

//Объект для валидации формы с добавлением карточки
const placeValidator = new FormValidator(validateObject, placeFormEdit);

profileEdit.addEventListener('click', () => {
  if (!profilePopup.classList.contains('popup_visible')) {
    inputName.setAttribute('value', profileName.textContent);
    inputJob.setAttribute('value', profileAboutSelf.textContent);
  }
  toggleModal(profilePopup);
  document.addEventListener('keyup', addDocumentKeyDownListener);
});

addPlace.addEventListener('click', () => {
  toggleModal(placePopup);
  document.addEventListener('keyup', addDocumentKeyDownListener);
});


profileFormEdit.addEventListener('submit', ProfileSubmitHandler);
placeFormEdit.addEventListener('submit', addPlaceSubmitHandler);


initialCards.forEach((obj) => {
  const card = (new Card(obj, 'place-card')).createCard(); 
  addCard(card);
});

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if(evt.target.classList.contains('popup__background') || evt.target.classList.contains('button-close')) {
      closeModalWindow(popup);
      document.removeEventListener('keyup', addDocumentKeyDownListener);
    }
  })
})

profileValidator.enableValidation();
placeValidator.enableValidation();