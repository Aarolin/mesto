import './index.css';
import '../index.html';
import { profileFormEdit, placeFormEdit } from '../utils/constants.js';
import { profileName, profileAboutSelf } from '../utils/constants.js';
import { initialCards } from '../utils/constants.js';
import { profileEdit, addPlace } from '../utils/constants.js';
import { validateObject } from '../utils/constants.js';
import { createCard } from '../utils/utils.js';
import FormValidator from '../components/FormValidator.js';;
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';


//Объект для валидации формы с профилем
const profileValidator = new FormValidator(validateObject, profileFormEdit);

//Объект для валидации формы с добавлением карточки
const placeValidator = new FormValidator(validateObject, placeFormEdit);

const popupWithImageElement = new PopupWithImage('.image-popup');
popupWithImageElement.setEventListeners();

const userInfoElement = new UserInfo({ userNameElement: profileName, userSelfInfoElement: profileAboutSelf });

const popupWithProfileElement = new PopupWithForm('.profile-popup', (userData) => {
  userInfoElement.setUserInfo(userData.name, userData.status);
  popupWithProfileElement.close();
});

popupWithProfileElement.setEventListeners();

const popupWithPlaceElement = new PopupWithForm('.place-popup', (dataPlace) => {
  const newCard = createCard(dataPlace, '#place-card', (cardImageSrc, cardImageCaption) => {
    popupWithImageElement.open(cardImageSrc, cardImageCaption);
  });
  cardList.addItem(newCard);
  popupWithPlaceElement.close();
});

popupWithPlaceElement.setEventListeners();

const cardList = new Section({
  data: initialCards, renderer: (item) => {
    const cardElement = createCard(item, '#place-card', (cardImageSrc, cardImageCaption) => {
      popupWithImageElement.open(cardImageSrc, cardImageCaption);
    });
    cardList.addItem(cardElement);
  }
}, '.elements__list');

profileEdit.addEventListener('click', () => {
  popupWithProfileElement.setInputValues(userInfoElement.getUserInfo());
  popupWithProfileElement.open();
});

addPlace.addEventListener('click', () => {
  popupWithPlaceElement.open();
});

cardList.renderItems();

profileValidator.enableValidation();
placeValidator.enableValidation();