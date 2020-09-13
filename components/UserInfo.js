export default class UserInfo {
    constructor({userNameElement, userSelfInfoElement}) {
        this._userNameElement = userNameElement;
        this._userSelfInfoElement = userSelfInfoElement;
    }
    
    getUserInfo() {
        return {userName: this._userNameElement.textContent, userSelfInfo: this._userSelfInfoElement.textContent};
    }

    setUserInfo(userName, userSelfInfo) {
        this._userNameElement.value = userName;
        this._userSelfInfoElement.value = userSelfInfo;
    }
}