import {
    passwordInput,
    passwordInput2,
    nameInput,
    phoneNumber,
    crnInput,
    storeNameInput,
    allPass,
} from "./validation";
import { API_URL } from "./common/constants";

// 구매회원, 판매회원 공통
export const idInput = document.querySelector("#username");
// export const passwordInput = document.querySelector("#password");
// export const passwordInput2 = document.querySelector("#password2");
// export const nameInput = document.querySelector("#name");

// 판매회원 추가
// export const crnInput = document.querySelector("#companyRegistrationNumber");
// export const storeNameInput = document.querySelector("#storeName");

export const message = document.querySelectorAll(".message");
export const signupButton = document.querySelector(".button-signup");
const buyerButton = document.querySelector(".button-buyer");
const sellerButton = document.querySelector(".button-seller");
const additionalForm = document.querySelector("fieldset");

// 회원가입 타입에 따른 폼 보여주는 이벤트
export let signupType = "";

buyerButton.addEventListener("click", () => {
    additionalForm.hidden = true;
    buyerButton.style.backgroundColor = "inherit";
    sellerButton.style.backgroundColor = "#F2F2F2";
    signupType = "";
    return signupType;
});
sellerButton.addEventListener("click", () => {
    additionalForm.hidden = false;
    signupType = "_seller";

    sellerButton.style.backgroundColor = "inherit";
    buyerButton.style.backgroundColor = "#F2F2F2";
    return signupType;
});

// 중복확인 요청 함수
export async function eachRequest(event) {
    event.preventDefault();

    const data = {
        username: idInput.value,
        phone_number:
            phoneNumber[0].value + phoneNumber[1].value + phoneNumber[2].value,
        company_registration_number: crnInput.value,
        store_name: storeNameInput.value,
    };

    try {
        const res = await fetch(`${API_URL}/accounts/signup${signupType}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const resJson = await res.json();
        console.log(resJson);

        return resJson;
    } catch (err) {
        console.error(err);
    }
}

// 회원가입 요청 함수
export async function signup(event) {
    event.preventDefault();

    const signupData = {
        username: idInput.value,
        password: passwordInput.value,
        password2: passwordInput2.value,
        phone_number:
            phoneNumber[0].value + phoneNumber[1].value + phoneNumber[2].value,
        name: nameInput.value,
        company_registration_number: crnInput.value,
        store_name: storeNameInput.value,
    };

    try {
        const res = await fetch(`${API_URL}/accounts/signup${signupType}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(signupData),
        });
        const resJson = await res.json();
        console.log(resJson);
    } catch (err) {
        console.error(err);
    }
}

signupButton.addEventListener("click", allPass && signup);
