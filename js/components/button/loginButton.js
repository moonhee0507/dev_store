import { reqLogin } from "../../common/api.js";

class LoginButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("type", "submit");
        this.button.setAttribute("class", "button-login");
        this.button.disabled = true;
        this.button.innerText = "로그인";

        this.button.addEventListener("click", async (event) => {
            event.preventDefault();
            const idInput = document.querySelector("#username");
            const passwordInput = document.querySelector("#password");
            const errorMessage = document.querySelector(".error-message");

            const username = idInput.value;
            const password = passwordInput.value;
            const loginType = window.localStorage.getItem("loginType");

            const loginData = {
                username: username,
                password: password,
                login_type: loginType,
            };

            try {
                const data = await reqLogin(loginData);

                if (username === "") {
                    errorMessage.textContent = "*아이디를 입력해주세요.";
                } else if (password === "") {
                    errorMessage.textContent = "비밀번호를 입력해주세요.";
                } else if (data.FAIL_Message === "로그인 정보가 없습니다.") {
                    errorMessage.textContent =
                        "*아이디 또는 비밀번호가 일치하지 않습니다.";
                    passwordInput.value = "";
                    passwordInput.focus();
                } else if (
                    data.FAIL_Message ===
                    "로그인 정보가 없습니다. 로그인 유형을 학인해주세요."
                ) {
                    errorMessage.textContent = "*로그인 유형을 확인해주세요.";
                }

                if (data.token) {
                    window.localStorage.setItem("token", data.token);
                    window.localStorage.setItem("user", username);
                    let preURL = document.referrer;
                    if (
                        preURL === "https://devstore.work/" ||
                        preURL.includes("/products/")
                    ) {
                        window.location.href = preURL;
                    } else window.location.href = "/";
                }
            } catch (e) {
                console.error(e);
            }
        });

        return this.button;
    }
}

export default LoginButton;
