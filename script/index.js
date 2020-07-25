//Получаем необходимые DOM элементы
const page = document.querySelector('.page');

//Модалки
const profilePopup = page.querySelector('.profile-popup');
const placePopup = page.querySelector('.place-popup');
const imagePopup = page.querySelector('.image-popup');

//Кнопки редактирования
const profileEdit = page.querySelector('.profile__edit');
const addPlace = page.querySelector('.profile__add-place');

//Формы
const profileFormEdit = profilePopup.querySelector('.edit-form');
const placeFormEdit = placePopup.querySelector('.edit-form');

//Элемент figure, в котором лежит изображение
const figurePopup = imagePopup.querySelector('.popup__figure');

//Инпуты из модалки для профиля
const inputName = profileFormEdit.querySelector('.edit-form__field-text[name=profile-name]');
const inputJob = profileFormEdit.querySelector('.edit-form__field-text[name=profile-job]');


//Картинка и подпись из figure
const imgOfFigure = figurePopup.querySelector('.popup__image');
const figureCaption = figurePopup.querySelector('.popup__caption');

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

//Кнопка закрыть модалки с изображением
const imagePopupButtonClose = imagePopup.querySelector('.edit-form__button-close');

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

//Background popup
const backgroundPopup = imagePopup.querySelector('.popup__background');

function createCard(obj) {
  const copyCard = cardTemplate.cloneNode(true);
  const cardDeleteButton = copyCard.querySelector('.elements__recycle-bin');
  const cardLikeButton = copyCard.querySelector('.elements__like');
  const cardImage = copyCard.querySelector('.elements__image');
  cardDeleteButton.addEventListener('click',  () =>  {
    const deleteItem = cardDeleteButton.closest('.elements__item');
    deleteItem.remove();
  });
  cardLikeButton.addEventListener('click', ()  => {
    cardLikeButton.classList.toggle('elements__like_disabled');
    cardLikeButton.classList.toggle('elements__like_active');
  });
  cardImage.addEventListener('click', () => {
    imgOfFigure.src = obj.link;
    imgOfFigure.alt = obj.name;
    figureCaption.textContent = obj.name;
    backgroundPopup.classList.add('popup__background_painted');
    imagePopup.classList.toggle('popup_visible');
  })
  copyCard.querySelector('.elements__header').textContent = obj.name;
  cardImage.src = obj.link;
  cardImage.alt  = obj.name;
  return copyCard;
}

function addCard(obj) {
  usersCards.prepend(createCard(obj));
}

function checkProfileForm() {
  if (!profilePopup.classList.contains('popup_visible')) {
    inputName.setAttribute('value', profileName.textContent);
    inputJob.setAttribute('value', profileAboutSelf.textContent);
  }
}

//Функция обработчик открытия модального окна
function toggleModal(modalForm) {
  checkProfileForm();
  modalForm.classList.toggle('popup_visible');
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

initialCards.forEach((obj) => {
  addCard(obj);
 });

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

imagePopupButtonClose.addEventListener('click',  () => {
  toggleModal(imagePopup);
});
profileFormEdit.addEventListener('submit', formSubmitHandler);
placeFormEdit.addEventListener('submit', addPlaceSubmitHandler);
