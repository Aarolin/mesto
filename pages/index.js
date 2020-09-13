import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {ProfileSubmitHandler, addPlaceSubmitHandler} from '../utils/utils.js';
import {profileFormEdit, placeFormEdit, placeName, placeReference, popupWithImage} from '../utils/constants.js';
import {profileName, profileAboutSelf} from '../utils/constants.js';
import {initialCards} from '../utils/constants.js';
import {profileEdit, addPlace} from '../utils/constants.js';
import {validateObject} from '../utils/constants.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
//Объект для валидации формы с профилем
const profileValidator = new FormValidator(validateObject, profileFormEdit);

//Объект для валидации формы с добавлением карточки
const placeValidator = new FormValidator(validateObject, placeFormEdit);

const popupWithImageElement = new PopupWithImage('.image-popup');

const cardList = new Section({data: initialCards, renderer: (item) => {
  const cardElement = new Card(item, '#place-card', (cardImageSrc, cardImageCaption) => {
    popupWithImageElement.open(cardImageSrc, cardImageCaption);
  }).createCard();
  cardList.addItem(cardElement);  
}}, '.elements__list');

profileEdit.addEventListener('click', () => {
  const userInfoElement = new UserInfo({userNameElement: profileName, userSelfInfoElement: profileAboutSelf});
  const userInformation = userInfoElement.getUserInfo();
  const popupWithFormElement = new PopupWithForm('.profile-popup', () => {

  });
  popupWithFormElement.open();
});

addPlace.addEventListener('click', () => {
  const popupwithFormElement = new PopupWithForm('.place-popup', () => {

  });
  popupwithFormElement.open();
});


profileFormEdit.addEventListener('submit', ProfileSubmitHandler);
placeFormEdit.addEventListener('submit', addPlaceSubmitHandler);

cardList.renderItems();

profileValidator.enableValidation();
placeValidator.enableValidation();

//TODO: заполнение полей в PopupWithForm