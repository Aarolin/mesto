
function showInputError(formElement, inputElement, inputErrorClass, errorClass, errorMessage) {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
}

function hideInputError(formElement, inputElement, inputErrorClass, errorClass) {
  const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
}

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement, inactiveButtonClass = 'edit-form__button-save_inactive') {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.disabled = true;
  }
  else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.disabled = false;
  }
}


function checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputErrorClass, errorClass, inputElement.validationMessage);
  }
  else {
    hideInputError(formElement, inputElement, inputErrorClass, errorClass);
  }
}

function setEventListeners(formElement, inputList, buttonElement, inactiveButtonClass, inputErrorClass, errorClass) {
  if (formElement.name.includes('place-edit-form')) {
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  }
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    });
  });
}

function enableValidation(obj) {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
    const buttonElement = formElement.querySelector(obj.sumbitButtonSelector);
    setEventListeners(formElement, inputList, buttonElement, obj.inactiveButtonClass, obj.inputErrorClass, obj.errorClass);
  });
}
enableValidation({
  formSelector: '.edit-form',
  inputSelector: '.edit-form__field-text',
  sumbitButtonSelector: '.edit-form__button-save',
  inactiveButtonClass: 'edit-form__button-save_inactive',
  inputErrorClass: 'edit-form__field-text_type_error',
  errorClass: 'edit-form__input-error_active'
});
