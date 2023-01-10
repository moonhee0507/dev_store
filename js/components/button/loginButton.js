import store from "../../../store.js";
import { __reqLogin } from "../../state/thunk/nonMember.js";

class LoginButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("type", "submit");
        this.button.setAttribute("class", "button-login");
        this.button.disabled = true;
        this.button.innerText = "로그인";

        store.subscribe(() => {
            if (
                store.getState().rootReducer.loginSlice.isActiveID &&
                store.getState().rootReducer.loginSlice.isActivePW
            ) {
                this.button.disabled = false;
                this.button.style.backgroundColor = "#202124";
                this.button.style.cursor = "pointer";
            } else {
                this.button.disabled = true;
                this.button.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
            }
        });

        this.button.addEventListener("click", (e) => {
            e.preventDefault();

            const idInput = document.querySelector("#username");
            const passwordInput = document.querySelector("#password");

            const entity = {
                username: idInput.value,
                password: passwordInput.value,
                login_type: store.getState().rootReducer.loginSlice.loginType,
            };

            store.dispatch(__reqLogin(entity));
            store.dispatch({
                type: "loginSlice/LOGIN_ID",
                username: idInput.value,
            });
        });

        return this.button;
    }
}

export default LoginButton;
