const page = document.querySelector('.page');
const popup = page.querySelector('.popup');
const profileEdit = page.querySelector('.profile__edit');
const editForm = page.querySelector('.edit-form');
const buttonClose = page.querySelector('.edit-form__button-close');
let fieldsText = page.querySelectorAll('.edit-form__field-text');
const profileName = page.querySelector('.profile__name');
const profileAboutSelf = page.querySelector('.profile__about-self');
const buttonSave = page.querySelector('.edit-form__button-save');
fieldsText[0].value = profileName.textContent;
fieldsText[1].value = profileAboutSelf.textContent;

function toggleForm() {
    popup.classList.toggle('popup_visible');
}


function formSubmitHandler (evt) {
    evt.preventDefault();
}

buttonSave.addEventListener('click', function () {
    profileName.textContent = fieldsText[0].value;
    profileAboutSelf.textContent = fieldsText[1].value;
    toggleForm();
});

profileEdit.addEventListener('click', toggleForm);
buttonClose.addEventListener('click', toggleForm);
editForm.addEventListener('submit', formSubmitHandler);