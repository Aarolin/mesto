const page = document.querySelector('.page');
const popup = page.querySelector('.popup');
const profileEdit = page.querySelector('.profile__edit');
const editForm = page.querySelector('.edit-form');
const buttonClose = page.querySelector('.edit-form__button-close');
const inputName = page.querySelector('.edit-form__field-text[name=profile-name]');
const inputJob = page.querySelector('.edit-form__field-text[name=profile-job]');
const profileName = page.querySelector('.profile__name');
const profileAboutSelf = page.querySelector('.profile__about-self');
const buttonSave = page.querySelector('.edit-form__button-save');

function toggleForm() {
    popup.classList.toggle('popup_visible');
    inputName.value = profileName.textContent;
    inputJob.value = profileAboutSelf.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAboutSelf.textContent = inputJob.value;
    toggleForm();
}

profileEdit.addEventListener('click', toggleForm);
buttonClose.addEventListener('click', toggleForm);
editForm.addEventListener('submit', formSubmitHandler);