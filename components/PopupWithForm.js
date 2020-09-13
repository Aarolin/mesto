import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormHandler) {
        super(popupSelector);
        this._submitFormHandler = submitFormHandler;
        this._form = this._element.querySelector('.edit-form');
        this._inputList = Array.from(this._form.querySelectorAll('.edit-form__field-text'));
    }
    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        this._form.addEventListener('submit', () => {
            this._submitFormHandler();
        });
        console.log(this._getInputValues());
        super.setEventListeners();
    }

    close() {
        super.close();
        this._form.reset();
    }

}