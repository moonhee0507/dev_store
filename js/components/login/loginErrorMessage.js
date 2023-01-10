import store from "../../../store.js";

class LoginErrorMessage {
    constructor() {
        this.strong = document.createElement("strong");
    }

    render() {
        this.strong.setAttribute("class", "error-message");
        store.subscribe(() => {
            switch (store.getState().rootReducer.loginSlice.errorMsg) {
                case "로그인 정보가 없습니다.":
                    this.strong.innerText =
                        "*아이디 또는 비밀번호가 일치하지 않습니다.";
                    break;

                case "로그인 정보가 없습니다. 로그인 유형을 학인해주세요.":
                    this.strong.innerText = "*로그인 유형을 확인해주세요.";
                    break;
            }
        });
        return this.strong;
    }
}

export default LoginErrorMessage;
