const page = document.querySelector('.page');
const pageContent = page.querySelector('.page-content');
const profileEdit = page.querySelector('.profile__edit');
const editForm = page.querySelector('.edit-form');
const buttonClose = page.querySelector('.edit-form__button-close');
let fieldsText = page.querySelectorAll('.edit-form__field-text');
const profileName = page.querySelector('.profile__name');
const profileAboutSelf = page.querySelector('.profile__about-self');
const buttonSave = page.querySelector('.edit-form__button-save');


function  toggleForm() {
    editForm.classList.toggle('edit-form_visible');
    pageContent.classList.toggle('page-content_form_is-open');
}

function fillForm() {
    fieldsText[0].value = profileName.textContent;
    fieldsText[1].value = profileAboutSelf.textContent;
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    fillForm();
}

fillForm();

buttonSave.addEventListener('click', function () {
    profileName.textContent = fieldsText[0].value;
    profileAboutSelf.textContent = fieldsText[1].value;
    toggleForm();
});

editForm.addEventListener('submit', formSubmitHandler);

profileEdit.addEventListener('click', toggleForm);
buttonClose.addEventListener('click', toggleForm);