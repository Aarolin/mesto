//Получаем необходимые DOM элементы
const page = document.querySelector('.page');

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

//Кнопка закрыть модалки профиля
const profileButtonClose = profilePopup.querySelector('.edit-form__button-close');

//Кнопки для модалки карточек
const placeButtonClose = placePopup.querySelector('.edit-form__button-close');

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

//Шаблон для карточек
const cardTemplate = document.querySelector('#place-card').content;
const usersCards = document.querySelector('.elements__list');

function createCard(obj) {
  const copyCard = cardTemplate.cloneNode(true);
  const cardDeleteButton = copyCard.querySelector('.elements__recycle-bin');
  const cardLikeButton = copyCard.querySelector('.elements__like');
  cardDeleteButton.addEventListener('click',  () =>  {
    const deleteItem = cardDeleteButton.closest('.elements__item');
    deleteItem.remove();
  });
  cardLikeButton.addEventListener('click', ()  => {
    cardLikeButton.classList.toggle('elements__like_disabled');
    cardLikeButton.classList.toggle('elements__like_active');
  });
  copyCard.querySelector('.elements__header').textContent = obj.name;
  copyCard.querySelector('.elements__image').src = obj.link;
  return copyCard;
}

function renderCards(obj) {
  usersCards.append(createCard(obj));
}
function addCard(obj) {
  usersCards.prepend(createCard(obj));
}

initialCards.forEach((obj) => {
  renderCards(obj);
});

//Функция обработчик открытия модального окна
function toggleModal(modalForm) {
  if (!modalForm.classList.contains('popup_visible')) {
    inputName.setAttribute('value', profileName.textContent);
    inputJob.setAttribute('value', profileAboutSelf.textContent);
  }
  modalForm.classList.toggle('popup_visible');
}

function togglePlaceForm() {
  placePopup.classList.toggle('place-popup_visible');
}

function formSubmitHandler(event) {
  //Отменяем перезагрузку страницы после закрытия и сохранения формы
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAboutSelf.textContent = inputJob.value;
  toggleModal(profilePopup);
}

function addPlaceSubmitHandler(event) {
  event.preventDefault();
  addCard({name: placeName.value, link: placeReference.value});
  toggleModal(placePopup);
}

profileEdit.addEventListener('click', () => {
  toggleModal(profilePopup);
});
profileButtonClose.addEventListener('click', () => {
  toggleModal(profilePopup);
});
addPlace.addEventListener('click', () => {
  toggleModal(placePopup);
});
placeButtonClose.addEventListener('click', () => {
  toggleModal(placePopup);
});
profileFormEdit.addEventListener('submit', formSubmitHandler);
placeFormEdit.addEventListener('submit', addPlaceSubmitHandler);
