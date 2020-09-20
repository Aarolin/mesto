import Card from '../components/Card.js';
import Api from '../components/Api.js';
import PopupWithForm from '../components/PopupWithForm.js';
import { popupWithImageElement } from '../pages/index.js';

export function createCard(data) {
    const card = new Card(data, '#place-card',
        ((cardImageSrc, cardImageCaption) => {
            popupWithImageElement.open(cardImageSrc, cardImageCaption);
        }),
        () => {
            const deletePopup = new PopupWithForm('.place-delete-popup', () => {
                const deleteApi = new Api({
                    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-15',
                    headers: {
                        authorization: '2bee6ecc-56d8-4816-8e34-e662025e826e',
                        'Content-Type': 'application/json'
                    }
                }).deleteCard(data._id);
                deletePopup.close();
                card.removeCard();
            });
            deletePopup.setEventListeners();
            deletePopup.open();
        },
        () => {
        const like = new Api({
            baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-15',
            headers: {
                authorization: '2bee6ecc-56d8-4816-8e34-e662025e826e',
                'Content-Type': 'application/json'
            }
        }).addLike(data._id).then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject('Не удалось поставить лайк');
        }).then((res) => {
            card.updateCard(res.likes);
        })
        .catch((err) => {
            console.log(err);
        });
    },
    () => {
     const deleteLike = new Api({
        baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-15',
        headers: {
            authorization: '2bee6ecc-56d8-4816-8e34-e662025e826e',
            'Content-Type': 'application/json'
        }
     }).deleteLike(data._id).then((res) => {
        if(res.ok) {
            return res.json();
        }
        return Promise.reject('Не удалось удалить лайк');
     }).then((res) => {
         card.updateCard(res.likes);
     }).catch((err) => {
         console.log(err);
     });  
    });
    return card.createCard();
}

export function renderCard(renderer, item) {
    renderer.addItem(item);
}