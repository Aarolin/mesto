//Получаем необходимые DOM элементы
const page = document.querySelector('.page');
const profilePopup = page.querySelector('.profile-popup');
const profileEdit = page.querySelector('.profile__edit');
const placeEdit = page.querySelector('.profile__add-place');
const profilEditForm = page.querySelector('.edit-form');
const placEditForm = page.querySelector('.place-edit-form');
const inputName = page.querySelector('.edit-form__field-text[name=profile-name]');
const inputJob = page.querySelector('.edit-form__field-text[name=profile-job]');
const profileName = page.querySelector('.profile__name');
const profileAboutSelf = page.querySelector('.profile__about-self');
const profileButtonClose = page.querySelector('.edit-form__button-close');
const placePopup = page.querySelector('.place-popup');
const placeButtonClose = page.querySelector('.place-edit-form__button-close');
const placeButtonSave = page.querySelector('.place-edit-form__button-save');
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
const cardTemplate = page.querySelector('#cards').content;
const usersCards = document.querySelector('.elements__list');
function renderCards() {
  for(let i = 0; i < initialCards.length; i++) {
    const copyCard = cardTemplate.cloneNode(true);
    copyCard.querySelector('.elements__header').textContent = initialCards[i].name;
    copyCard.querySelector('.elements__image').src = initialCards[i].link;
    usersCards.append(copyCard);
  }
}
function addCard(event) {
  event.preventDefault();
  const placeName = placEditForm.querySelector('.place-edit-form__field-text[name=place-name]');
  const placeReference = placEditForm.querySelector('.place-edit-form__field-text[name=place-reference]');
  const copyCard = cardTemplate.cloneNode(true);
  copyCard.querySelector('.elements__header').textContent = placeName.value;
  copyCard.querySelector('.elements__image').src = placeReference.value;
  usersCards.prepend(copyCard);
  togglePlaceForm();
}
//Функция обработчик открытия модального окна
function toggleProfileForm() {
  if (!profilePopup.classList.contains('profile-popup_visible')) {
    profilePopup.classList.toggle('profile-popup_visible');
    inputName.setAttribute('value', profileName.textContent);
    inputJob.setAttribute('value', profileAboutSelf.textContent);
  }
  else {
    profilePopup.classList.toggle('profile-popup_visible');
  }
}

function togglePlaceForm() {
  placePopup.classList.toggle('place-popup_visible');
}

function formSubmitHandler(evt) {
  //Отменяем перезагрузку страницы после закрытия и сохранения формы
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAboutSelf.textContent = inputJob.value;
  toggleProfileForm();
}
renderCards();
placeEdit.addEventListener('click', togglePlaceForm);
profileEdit.addEventListener('click', toggleProfileForm);
profileButtonClose.addEventListener('click', toggleProfileForm);
placeButtonClose.addEventListener('click', togglePlaceForm);
profilEditForm.addEventListener('submit', formSubmitHandler);
placEditForm.addEventListener('submit', addCard);
