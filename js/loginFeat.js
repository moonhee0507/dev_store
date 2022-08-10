import { API_URL } from "./common/constants";

const idInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");
const errorMessage = document.querySelector(".error-message");
const loginButton = document.querySelector(".button-login");
const buyerButton = document.querySelector(".button-buyer");
const sellerButton = document.querySelector(".button-seller");

// 로그인 타입 기본값
let loginType = "BUYER";

buyerButton.addEventListener("click", () => {
    loginType = buyerButton.value;
    buyerButton.style.backgroundColor = "inherit";
    sellerButton.style.backgroundColor = "#F2F2F2";
    return loginType;
});
sellerButton.addEventListener("click", () => {
    loginType = sellerButton.value;
    sellerButton.style.backgroundColor = "inherit";
    buyerButton.style.backgroundColor = "#F2F2F2";
    return loginType;
});

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
        const res = await fetch(`${API_URL}/accounts/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(loginData),
        });

        const resJson = await res.json();

        console.log(resJson);

        if (username === "") {
            errorMessage.textContent = "*아이디를 입력해주세요.";
        } else if (password === "") {
            errorMessage.textContent = "비밀번호를 입력해주세요.";
        } else if (resJson.FAIL_Message === "로그인 정보가 없습니다.") {
            errorMessage.textContent =
                "*아이디 또는 비밀번호가 일치하지 않습니다.";
        } else if (
            resJson.FAIL_Message ===
            "로그인 정보가 없습니다. 로그인 유형을 학인해주세요."
        ) {
            errorMessage.textContent = "*로그인 유형을 확인해주세요.";
        }
    } catch (err) {
        console.error(err);
    }
}

loginButton.addEventListener("click", login);
