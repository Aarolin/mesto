import Card from './Card.js';
import FormValidator from './FormValidator.js';
import {addDocumentKeyDownListener, toggleModal} from './utils.js';

//Получаем необходимые DOM элементы
const page = document.querySelector('.page');

const popups = Array.from(document.querySelectorAll('.popup'));

//Модалки
const profilePopup = page.querySelector('.profile-popup');
const placePopup = page.querySelector('.place-popup');

//Кнопки редактирования
const profileEdit = page.querySelector('.profile__edit');
const addPlace = page.querySelector('.profile__add-place');

//Формы
const profileFormEdit = profilePopup.querySelector('.edit-form');
const placeFormEdit = placePopup.querySelector('.edit-form');

//Инпуты из модалки для профиля
const inputName = profileFormEdit.querySelector('.edit-form__field-text[name=profile-name]');
const inputJob = profileFormEdit.querySelector('.edit-form__field-text[name=profile-job]');

//Инпуты из модалки для карточек
const placeName = placeFormEdit.querySelector('.edit-form__field-text[name=place-name]');
const placeReference = placeFormEdit.querySelector('.edit-form__field-text[name=place-reference]');

//Поля из профиля
const profileName = page.querySelector('.profile__name');
const profileAboutSelf = page.querySelector('.profile__about-self');

//Начальный массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

//Место куда вставляются карточки 
const usersCards = document.querySelector('.elements__list');

//Объект с данными валидации
const validateObject = {
  inputSelector: '.edit-form__field-text',
  submitButtonSelector: '.edit-form__button-save',
  inactiveButtonClass: 'edit-form__button-save_inactive',
  inputErrorClass: 'edit-form__field-text_type_error',
  errorClass: 'edit-form__input-error_active'
}

//Объект для валидации формы с профилем
const profileValidator = new FormValidator(validateObject, profileFormEdit);

//Объект для валидации формы с добавлением карточки
const placeValidator = new FormValidator(validateObject, placeFormEdit);

function addCard(card) {
  usersCards.prepend(card);
}

function ProfileSubmitHandler() {
  profileName.textContent = inputName.value;
  profileAboutSelf.textContent = inputJob.value;
  toggleModal(profilePopup);
  document.removeEventListener('keyup', addDocumentKeyDownListener);
}

function addPlaceSubmitHandler() {
  addCard((new Card({name: placeName.value, link: placeReference.value}, 'place-card')).createCard());
  toggleModal(placePopup);
  placeFormEdit.reset();
  document.removeEventListener('keyup', addDocumentKeyDownListener);
}

function closeModalWindow(modalWindow) {
  modalWindow.classList.remove('popup_visible');
}

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