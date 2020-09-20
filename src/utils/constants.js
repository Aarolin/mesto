const page = document.querySelector('.page');

//Модалки
export const profilePopup = page.querySelector('.profile-popup');
export const placePopup = page.querySelector('.place-popup');
export const deletePopup = document.querySelector('.place-delete-popup');
export const updatePopup = document.querySelector('.update-profile-popup');

//Кнопки редактирования
export const profileEdit = page.querySelector('.profile__edit');
export const addPlace = page.querySelector('.profile__add-place');

export const profile = document.querySelector('.profile__avatar');

//Формы
export const profileFormEdit = profilePopup.querySelector('.edit-form');
export const placeFormEdit = placePopup.querySelector('.edit-form');
export const updateAvatarForm = updatePopup.querySelector('.edit-form');

//Инпуты из модалки для профиля
export const inputName = profileFormEdit.querySelector('.edit-form__field-text[name=name]');
export const inputJob = profileFormEdit.querySelector('.edit-form__field-text[name=status]');

//Инпуты из модалки для карточек
export const placeName = placeFormEdit.querySelector('.edit-form__field-text[name=name]');
export const placeReference = placeFormEdit.querySelector('.edit-form__field-text[name=link]');

//Поля из профиля
export const profileName = page.querySelector('.profile__name');
export const profileAboutSelf = page.querySelector('.profile__about-self');

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
