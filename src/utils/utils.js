import Card from '../components/Card.js';
import {popupWithImageElement} from '../pages/index.js';

export function createCard(data) {
    return new Card(data, '#place-card', ((cardImageSrc, cardImageCaption) => {
        popupWithImageElement.open(cardImageSrc, cardImageCaption);
    })).createCard();
}

export function renderCard(renderer, item) {
    renderer.addItem(item);
}