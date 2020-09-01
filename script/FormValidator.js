class FormValidator {
    constructor(data, formElement) {
        this._inputSelector = data.inputSelector;
        this._submitButtonSelector = data.submitButtonSelector;
        this._inactiveButtonClass = data.inactiveButtonClass;
        this._inputErrorClass = data.inputErrorClass;
        this._errorClass = data.errorClass;
        this._formElement = formElement;
        this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
        this._buttonSubmit = this._formElement.querySelector(this._submitButtonSelector);
        this._buttonClose = this._formElement.querySelector('.edit-form__button-close');
    }

    //Вывод сообщения об ошибке
    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.add(this._inputErrorClass);
        errorElement.classList.add(this._errorClass);
        errorElement.textContent = inputElement.validationMessage;
    }

    //Скрытие сообщения об ошибке
    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
        inputElement.classList.remove(this._inputErrorClass);
        errorElement.classList.remove(this._errorClass);
        errorElement.textContent = '';
    }

    //Проверим все поля ввода валидны
    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            //Возврат true, если хотя бы одно поле ввода не валидно 
            return !inputElement.validity.valid;
        });
    }

    //Смена состояния кнопки
    _toggleButtonState() {
        if (this._hasInvalidInput()) {
            this._buttonSubmit.classList.add(this._inactiveButtonClass);
            this._buttonSubmit.disabled = true;
        }
        else {
            this._buttonSubmit.classList.remove(this._inactiveButtonClass);
            this._buttonSubmit.disabled = false;
        }
    }

    //Проверка валидности одного поля ввода
    _checkInputValidity(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement);
        }
        else {
            this._hideInputError(inputElement);
        }
    }

    //Очистка полей ввода внутри формы
    _resetInputs() {
        this._inputList.forEach((inputElement) => {
            this._toggleButtonState();
            inputElement.value = '';
        });
    }

    //Очистка ошибок валидации
    _resetInputsError() {
        const inputErrorList = Array.from(this._formElement.querySelectorAll('.edit-form__input-error'));
        inputErrorList.forEach((inputErrorElement) => {
            inputErrorElement.textContent = '';
        });
    }

    //Установка необходимых слушателей
    _setEventListeners() {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            //Форма для карточек требует очистки полей после создания новой карточки
            if (this._formElement.name === 'place-edit-form') {
                this._resetInputs();
                this._inputList.forEach((inputElement) => {
                    inputElement.textContent = '';
                });
            }
        });
        //Очистка ошибок валидации, если при закрытии формы для карточек, новая карточка не была добавлена
        if (this._formElement.name === 'place-edit-form') {
            this._buttonClose.addEventListener('click', () => {
                this._resetInputsError();
            });
            this._formElement.closest('.popup').querySelector('.popup__background').addEventListener('click', () => {
                this._resetInputsError();
            });
        }
        //Проверка отдельных полей на валидность
        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._checkInputValidity(inputElement);
                //Смена состояния кнопки "Сохранить" в зависимости от валидности полей ввода
                this._toggleButtonState();
            });
        });
    }

    enableValidation() {
        //При открытии формы добавления карточек кнопка "Создать" не должна быть активна
        if (this._formElement.name === 'place-edit-form') {
            this._toggleButtonState();
        }

        this._setEventListeners();
    }
}

export default FormValidator;