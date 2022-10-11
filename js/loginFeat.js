import { reqLogin } from "./common/api";

const idInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const errorMessage = document.querySelector(".error-message");
const loginButton = document.querySelector(".button-login");
const buyerButton = document.querySelector(".button-buyer");
const sellerButton = document.querySelector(".button-seller");

idInput.focus();

// 로그인 타입 기본값
let loginType = "BUYER";
localStorage.setItem("loginType", loginType);

let buttonLoginType = [buyerButton, sellerButton];
for (let i = 0; i < buttonLoginType.length; i++) {
    buttonLoginType[i].addEventListener("click", () => {
        initializeStyle();
        buttonLoginType[i].style.backgroundColor = "inherit";
        loginType = buttonLoginType[i].value;
        localStorage.setItem("loginType", loginType);

        if (i === 0) {
            // style remove
            buttonLoginType[i + 1].classList.remove("on");
            buttonLoginType[i].classList.remove("help");
            // style add
            buttonLoginType[i].classList.add("on");
            buttonLoginType[i + 1].classList.add("help");
        } else if (i === 1) {
            // style remove
            buttonLoginType[i - 1].classList.remove("on");
            buttonLoginType[i].classList.remove("help");
            // style add
            buttonLoginType[i].classList.add("on");
            buttonLoginType[i - 1].classList.add("help");
        }
    });
}
function initializeStyle() {
    for (let i = 0; i < buttonLoginType.length; i++) {
        buttonLoginType[i].style.backgroundColor = "#F2F2F2";
    }
}

// 로그인 버튼 활성화 함수
function isDisabledButton() {
    if (idInput.value !== "" && passwordInput.value !== "") {
        loginButton.disabled = false;
        loginButton.style.backgroundColor = "#334863";
        loginButton.style.cursor = "pointer";
    } else {
        loginButton.disabled = true;
        loginButton.style.backgroundColor = "#abb5c2";
    }
}

// input의 값이 변경되면 버튼 이벤트 발생
idInput.addEventListener("input", isDisabledButton);
passwordInput.addEventListener("input", isDisabledButton);

// 로그인 요청 함수
async function login(event) {
    event.preventDefault();

    const username = idInput.value;
    const password = passwordInput.value;

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
            localStorage.setItem("token", data.token);
            localStorage.setItem("1", username);
            window.history.back();
        }
    } catch (err) {
        console.error(err);
    }
}

loginButton.addEventListener("click", login);

// input 내용을 변경하면 message 사라지게 하기
const input = document.querySelectorAll("input");
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("input", () => {
        errorMessage.innerText = "";
    });
}
