import Card from './Card.js';
import FormValidator from './FormValidator.js';

//Получаем необходимые DOM элементы
const page = document.querySelector('.page');

//Модалки
const profilePopup = page.querySelector('.profile-popup');
const placePopup = page.querySelector('.place-popup');
const popups = Array.from(page.querySelectorAll('.popup'));
const popupBackground = page.querySelectorAll('.popup__background');


//Кнопки редактирования
const profileEdit = page.querySelector('.profile__edit');
const addPlace = page.querySelector('.profile__add-place');

//Формы
const profileFormEdit = profilePopup.querySelector('.edit-form');
const placeFormEdit = placePopup.querySelector('.edit-form');

//Кнопки, закрывающие формы
const closeButtons = page.querySelectorAll('.button-close');

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

const usersCards = document.querySelector('.elements__list');

//Закрытие на модалок на кнопку Escape
function addDocumentKeyDownListener(evt) {
  if (evt.key === 'Escape') {
    toggleModal(popupOpened(popups));
    document.removeEventListener('keydown', addDocumentKeyDownListener);
  }
}

function addCard(card) {
  usersCards.prepend(card);
}

function checkProfileForm() {
  if (!profilePopup.classList.contains('popup_visible')) {
    inputName.setAttribute('value', profileName.textContent);
    inputJob.setAttribute('value', profileAboutSelf.textContent);
  }
}

//Функция обработчик открытия модального окна
function toggleModal(modalForm) {
  modalForm.classList.toggle('popup_visible');
}

function ProfileSubmitHandler() {
  profileName.textContent = inputName.value;
  profileAboutSelf.textContent = inputJob.value;
  toggleModal(profilePopup);
  document.removeEventListener('keydown', addDocumentKeyDownListener);
}

function addPlaceSubmitHandler() {
  addCard((new Card({name: placeName.value, link: placeReference.value}, 'place-card')).createCard());
  toggleModal(placePopup);
  document.removeEventListener('keydown', addDocumentKeyDownListener);
}

function popupOpened(popupsList) {
  let openedPopup;
  popupsList.forEach((popup) => {
    if (popup.classList.contains('popup_visible')) {
      openedPopup = popup;
    }
  });
  return openedPopup;
}

profileEdit.addEventListener('click', () => {
  checkProfileForm();
  toggleModal(profilePopup);
  document.addEventListener('keydown', addDocumentKeyDownListener);
});

addPlace.addEventListener('click', () => {
  toggleModal(placePopup);
  document.addEventListener('keydown', addDocumentKeyDownListener);
});


profileFormEdit.addEventListener('submit', ProfileSubmitHandler);
placeFormEdit.addEventListener('submit', addPlaceSubmitHandler);


initialCards.forEach((obj) => {
  addCard((new Card(obj, 'place-card')).createCard());
});

//Закрытие overlay
popupBackground.forEach((item) => {
  item.addEventListener('click', (evt) => {
    evt.target.closest('.popup').classList.remove('popup_visible');
    document.removeEventListener('keydown', addDocumentKeyDownListener);
  });
});

//Закрытие на кнопку закрыть
closeButtons.forEach((button) => {
  button.addEventListener('click', (evt) => {
    evt.target.closest('.popup').classList.remove('popup_visible');
    document.removeEventListener('keydown', addDocumentKeyDownListener);
  });
});

const validateObject = {
  inputSelector: '.edit-form__field-text',
  submitButtonSelector: '.edit-form__button-save',
  inactiveButtonClass: 'edit-form__button-save_inactive',
  inputErrorClass: 'edit-form__field-text_type_error',
  errorClass: 'edit-form__input-error_active'
}
const profileValidator = new FormValidator(validateObject, profileFormEdit);
const placeValidator = new FormValidator(validateObject, placeFormEdit);
profileValidator.enableValidation();
placeValidator.enableValidation();