const page = document.querySelector('.page');
const pageContent = page.querySelector('.page-content');
const profileEdit = page.querySelector('.profile__edit');
const editForm = page.querySelector('.edit-form');
const buttonClose = page.querySelector('.edit-form__button-close');
let fieldsText = page.querySelectorAll('.edit-form__field-text');
const profileName = page.querySelector('.profile__name');
const profileStatus = page.querySelector('.profile__status');
const buttonSave = page.querySelector('.edit-form__button-save');

function  toggleForm() {
    editForm.classList.toggle('edit-form_visible');
    pageContent.classList.toggle('page_form_is-open');
}

profileEdit.addEventListener('click', toggleForm);

buttonClose.addEventListener('click', toggleForm);

fieldsText[0].value = page.querySelector('.profile__name').textContent;
fieldsText[1].value = page.querySelector('.profile__status').textContent;

buttonSave.addEventListener('click', function () {
    profileName.textContent = fieldsText[0].value;
    profileStatus.textContent = fieldsText[1].value;
    toggleForm();
});
