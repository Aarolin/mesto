import Card from '../components/Card.js';
import PopupWithForm from '../components/PopupWithForm.js';
import {api} from '../pages/index.js';
import { popupWithImageElement } from '../pages/index.js';

export function createCard(data) {
    const card = new Card(data, '#place-card',
        ((cardImageSrc, cardImageCaption) => {
            popupWithImageElement.open(cardImageSrc, cardImageCaption);
        }),
        () => {
            const deletePopup = new PopupWithForm('.place-delete-popup', () => {
                api.deleteCard(data._id).finally(() => {
                    deletePopup.close();
                    card.removeCard();
                });
            });
            deletePopup.setEventListeners();
            deletePopup.open();
        },
        () => {
            api.addLike(data._id).then((res) => {
            card.updateCard(res.likes);
        })
        .catch((err) => {
            console.log(err);
        });
    },
    () => {
    api.deleteLike(data._id).then((res) => {
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