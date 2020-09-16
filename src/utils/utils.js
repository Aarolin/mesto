import Card from '../components/Card.js';

export function createCard(data, templateSelector, handleCardClickCallBack) {
    return new Card(data, templateSelector, handleCardClickCallBack).createCard();
}