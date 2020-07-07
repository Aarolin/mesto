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
    pageContent.classList.toggle('page_form_is-open');
}

fieldsText[0].value = profileName.textContent;
fieldsText[1].value = profileAboutSelf.textContent;

buttonSave.addEventListener('click', function () {
    profileName.textContent = fieldsText[0].value;
    profileAboutSelf.textContent = fieldsText[1].value;
    toggleForm();
});

profileEdit.addEventListener('click', toggleForm);
buttonClose.addEventListener('click', toggleForm);