//Получаем необходимые DOM элементы
export const page = document.querySelector('.page');
export const popups = Array.from(document.querySelectorAll('.popup'));

//Модалки
export const profilePopup = page.querySelector('.profile-popup');
export const placePopup = page.querySelector('.place-popup');

//Кнопки редактирования
export const profileEdit = page.querySelector('.profile__edit');
export const addPlace = page.querySelector('.profile__add-place');

//Формы
export const profileFormEdit = profilePopup.querySelector('.edit-form');
export const placeFormEdit = placePopup.querySelector('.edit-form');

//Инпуты из модалки для профиля
export const inputName = profileFormEdit.querySelector('.edit-form__field-text[name=profile-name]');
export const inputJob = profileFormEdit.querySelector('.edit-form__field-text[name=profile-job]');

//Инпуты из модалки для карточек
export const placeName = placeFormEdit.querySelector('.edit-form__field-text[name=place-name]');
export const placeReference = placeFormEdit.querySelector('.edit-form__field-text[name=place-reference]');

//Поля из профиля
export const profileName = page.querySelector('.profile__name');
export const profileAboutSelf = page.querySelector('.profile__about-self');

//Начальный массив карточек
export const initialCards = [
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
export const usersCards = document.querySelector('.elements__list');

//Объект с данными валидации
export const validateObject = {
  inputSelector: '.edit-form__field-text',
  submitButtonSelector: '.edit-form__button-save',
  inactiveButtonClass: 'edit-form__button-save_inactive',
  inputErrorClass: 'edit-form__field-text_type_error',
  errorClass: 'edit-form__input-error_active'
}

export const popupWithImage = document.querySelector('.image-popup');
export const popupCaption = popupWithImage.querySelector('.popup__caption');
export const popupImage = popupWithImage.querySelector('.popup__image');