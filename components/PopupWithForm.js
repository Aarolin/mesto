import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFormHandler) {
        super(popupSelector);
        this._submitFormHandler = submitFormHandler;
        this._form = this._element.querySelector('.edit-form');
        this._inputList = Array.from(this._form.querySelectorAll('.edit-form__field-text'));
        this._getInputValues = this._getInputValues.bind(this);
    }

    _getInputValues() {
        this._formValues = {};
        this._inputList.forEach((input) => {
            this._formValues[input.name] = input.value;
        });
        return this._formValues;
    }

    setInputValues(userInfo) {
        const arrayTemp = [];

        for (let key in userInfo) {
            arrayTemp.push(userInfo[key]);
        }

        for (let i = 0; i < this._inputList.length; i++) {
            this._inputList[i].value = arrayTemp[i];
        }
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._submitFormHandler(this._getInputValues());
        });
        super.setEventListeners();
    }

    close() {
        super.close();
        this._form.reset();
    }

}