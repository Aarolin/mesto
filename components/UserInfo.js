export default class UserInfo {
    constructor({userNameElement, userSelfInfoElement}) {
        this._userNameElement = userNameElement;
        this._userSelfInfoElement = userSelfInfoElement;
    }
    
    getUserInfo() {
        return {name: this._userNameElement.textContent, status: this._userSelfInfoElement.textContent};
    }

    setUserInfo(userName, userSelfInfo) {
        this._userNameElement.textContent = userName;
        this._userSelfInfoElement.textContent = userSelfInfo;
    }
}