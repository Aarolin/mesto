export default class Api {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject('Увы: не удалось получить карточки от сервера(');
        });
    }
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject('Увы: не удалось получить данные о профиле от сервера(');
        });
    }
    redactProfile(newName, newStatus) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: newName,
                about: newStatus
            })
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject();
        });
    }
    addCard(name, link) {
        return fetch(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject('Не удалось добавить новую карточку(');
        });
    }
    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/${cardId}`, {
            method: 'DELETE', 
            headers: this._headers
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject();
        });
    }

    addLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'PUT',
            headers: this._headers
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject('Не удалось поставить лайк');
        });
    }

    deleteLike(cardId) {
        return fetch(`${this._baseUrl}/cards/likes/${cardId}`, {
            method: 'DELETE',
            headers: this._headers
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject('Не удалось удалить лайк');
        });
    }

    updateAvatar(link) {
        return fetch(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: link,
            })
        }).then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject('Не удалось обновить аватар');
        });
    }
}