import './index.css';
import '../index.html';
import { profileFormEdit, placeFormEdit, updateAvatarForm } from '../utils/constants.js';
import { profileEdit, addPlace } from '../utils/constants.js';
import { validateObject } from '../utils/constants.js';
import { createCard, renderCard } from '../utils/utils.js';
import { profileName, profileAboutSelf, profile } from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';;
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

export const popupWithImageElement = new PopupWithImage('.image-popup');
popupWithImageElement.setEventListeners();

export const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-15',
  headers: {
    authorization: '2bee6ecc-56d8-4816-8e34-e662025e826e',
    'Content-Type': 'application/json'
  }
})

api.getUserInfo()
  .then((res) => {
    const userInfoElement = new UserInfo({ userNameElement: profileName, userSelfInfoElement: profileAboutSelf, userAvatar: profile }, () => {
      const updateProfileAvatar = new PopupWithForm('.update-profile-popup', (link) => {
        updateProfileAvatar.rendering();
        api.updateAvatar(link.avatar).then((res) => {
          userInfoElement.setUserAvatar(res.avatar);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          updateProfileAvatar.stopRendering();
          updateProfileAvatar.close();
        })
      });
      updateProfileAvatar.setEventListeners();
      updateProfileAvatar.open();
    });
    userInfoElement.setEventListenrs();
    userInfoElement.setUserAvatar(res.avatar);
    userInfoElement.setUserInfo(res.name, res.about);
    const popupWithProfileElement = new PopupWithForm('.profile-popup', (userData) => {
      popupWithProfileElement.rendering();
      api.redactProfile(userData.name, userData.status).finally(() => {
        popupWithProfileElement.stopRendering();
        userInfoElement.setUserInfo(userData.name, userData.status);
        popupWithProfileElement.close();
      });
    });
    popupWithProfileElement.setEventListeners();
    profileEdit.addEventListener('click', () => {
      popupWithProfileElement.setInputValues(userInfoElement.getUserInfo());
      popupWithProfileElement.open();
    });
  })
  .catch((err) => {
    console.log(err);
  });

  api.getInitialCards().then((res) => {
    const cardList = new Section({
      data: res, renderer: (item) => {
        const cardElement = createCard(item);
        renderCard(cardList, cardElement);
      }
    }, '.elements__list');
    cardList.renderItems();
    const popupWithPlaceElement = new PopupWithForm('.place-popup', (dataPlace) => {
      popupWithPlaceElement.rendering();
      api.addCard(dataPlace.name, dataPlace.link).then((res) => {
        const newCard = createCard(res);
        renderCard(cardList, newCard);
      }).catch((err) => {
        console.log(err);
      }).finally(() => {
        popupWithPlaceElement.close();
        popupWithPlaceElement.stopRendering();
      });
    });
    popupWithPlaceElement.setEventListeners();
    addPlace.addEventListener('click', () => {
      popupWithPlaceElement.open();
    });
  })
  .catch((err) => {
    console.log(err);
  });

//Объект для валидации формы с профилем
const profileValidator = new FormValidator(validateObject, profileFormEdit);

//Объект для валидации формы с добавлением карточки
const placeValidator = new FormValidator(validateObject, placeFormEdit);

const updateAvatarValidator = new FormValidator(validateObject, updateAvatarForm);

profileValidator.enableValidation();
placeValidator.enableValidation();
updateAvatarValidator.enableValidation();
