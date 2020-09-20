export default class UserInfo {
    constructor({userNameElement, userSelfInfoElement, userAvatar}, handleAvatarClick) {
        this._userNameElement = userNameElement;
        this._userSelfInfoElement = userSelfInfoElement;
        this._userAvatar = userAvatar;
        this._handleAvatarClick = handleAvatarClick.bind(this);
    }
    
    getUserInfo() {
        return {name: this._userNameElement.textContent, status: this._userSelfInfoElement.textContent, avatar: this._userAvatar.src};
    }

    setUserInfo(userName, userSelfInfo) {
        this._userNameElement.textContent = userName;
        this._userSelfInfoElement.textContent = userSelfInfo;
    }
    setUserAvatar(userAvatarSrc) {
        this._userAvatar.src = userAvatarSrc;
    }
    setEventListenrs() {
        this._userAvatar.addEventListener('click', this._handleAvatarClick);
    }
}