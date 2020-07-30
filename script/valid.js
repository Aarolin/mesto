//TODO: правильные стили для span, убрать наведение когда кнопка disabled, закрытие overlay

function showInputError(formElement, inputElement, errorMessage) {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.add('edit-form__field-text_type_error');
    errorElement.classList.add('edit-form__input-error_active');
    errorElement.textContent = errorMessage;
  }
  
  function hideInputError(formElement, inputElement) {
    const errorElement = formElement.querySelector(`#${inputElement.name}-error`);
    inputElement.classList.remove('edit-form__field-text_type_error');
    errorElement.classList.remove('edit-form__input-error_active');
    errorElement.textContent = '';
  }
  
  function hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  
  function toggleButtonState(inputList, buttonElement) {
    if(hasInvalidInput(inputList)) {
      buttonElement.classList.add('edit-form__button-save_inactive');
      buttonElement.disabled = true;
    }
    else {
      buttonElement.classList.remove('edit-form__button-save_inactive');
      buttonElement.disabled = false;
    }
  }
  
  
  function checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    }
    else {
      hideInputError(formElement, inputElement);
    }
  }
  
  function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll('.edit-form__field-text'));
    const buttonElement = formElement.querySelector('.edit-form__button-save');
    toggleButtonState(inputList, buttonElement);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
  }
  
  function enableValidation() {
    const formList = Array.from(document.querySelectorAll('.edit-form'));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', (evt) => {
        evt.preventDefault();
      });
      setEventListeners(formElement);
    });
  }
  enableValidation();