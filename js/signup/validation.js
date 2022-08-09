import { idInput, message, signup } from "./signup";

// (공통) 빈값 처리
const input = document.querySelectorAll("input");
for (let i = 1; i <= 3; i++) {
    input[i].addEventListener("focus", () => {
        input[i - 1].value === "" &&
            (message[i - 1].innerText = "필수 정보입니다.");
    });
}

// username - 중복 체크, regex
const usernameDuplicateCheck = document.querySelector(
    ".username-duplicate-check"
);
usernameDuplicateCheck.addEventListener("click", async (event) => {
    // 회원가입 요청 함수 재사용
    signup(event).then((resJson) => {
        const usernameRegex = /^[a-zA-Z0-9]{5,20}/;
        if (idInput.value === "") {
            message[0].innerText = "필수 정보입니다.";
        } else if (!usernameRegex.test(idInput.value)) {
            message[0].innerText =
                "5자 이상 20자 이내 영문 및 숫자만 사용 가능합니다.";
        } else if (
            resJson.username &&
            resJson.username[0] === "해당 사용자 아이디는 이미 존재합니다."
        ) {
            message[0].innerText = "이미 사용 중인 아이디입니다.";
        } else {
            message[0].innerText = "사용 가능한 아이디입니다.";
        }
    });
});

// password - regex(영문, 숫자, 특수문자 포함 8자 이상 && 소문자, 숫자 1개 이상 필수)
export const passwordInput = document.querySelector("#password");
const passwordRegex =
    /^(?=.*[a-z])(?=.*[0-9])[a-z0-9A-Z\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{8,}$/;

passwordInput.addEventListener("input", () => {
    if (!passwordRegex.test(passwordInput.value)) {
        message[1].innerText =
            "8자 이상 영문, 숫자, 특수문자를 사용하세요(소문자, 숫자 각1자 이상 필수).";
    } else {
        message[1].innerText = "";
    }
});

// password2 - 일치
export const passwordInput2 = document.querySelector("#password2");
passwordInput2.addEventListener("input", () => {
    if (passwordInput2.value !== passwordInput.value) {
        message[2].innerText = "비밀번호가 일치하지 않습니다.";
    } else {
        message[2].innerText = "";
    }
});

// name - 빈값
export const nameInput = document.querySelector("#name");
nameInput.addEventListener("input", () => {
    nameInput.value === ""
        ? (message[3].innerText = "필수 정보입니다.")
        : (message[3].innerText = "");
});

// phoneNumber - 중복 체크, regex
export const phoneNumber = document.querySelectorAll(".phoneNumber");

phoneNumber[2].addEventListener("blur", (event) => {
    phoneNumberRegexCheck() && phoneNumberDuplicateCheck(event);
});

// 값 변경 시 message 지우기
for (let i = 0; i <= 2; i++) {
    phoneNumber[i].addEventListener("input", () => {
        message[4].innerText = "";
    });
}

function phoneNumberRegexCheck() {
    const middleRegex = /^[0-9]{3,4}/;
    const lastRegex = /^[0-9]{4}/;

    if (
        phoneNumber[1].value === "" ||
        !middleRegex.test(phoneNumber[1].value)
    ) {
        phoneNumber[1].focus();
        message[4].innerText = "전화번호를 올바르게 입력해주세요.";
        return false;
    } else if (
        phoneNumber[2].value === "" ||
        !lastRegex.test(phoneNumber[2].value)
    ) {
        phoneNumber[2].focus();
        message[4].innerText = "전화번호를 올바르게 입력해주세요.";
        return false;
    }
    return true;
}

function phoneNumberDuplicateCheck(event) {
    signup(event).then((resJson) => {
        if (
            resJson.phone_number &&
            resJson.phone_number[0] ===
                "해당 사용자 전화번호는 이미 존재합니다."
        ) {
            message[4].innerText = resJson.phone_number[0];
        } else {
            message[4].innerText = "";
        }
    });
}

// company_registration_number - 중복 체크, regex
const crnDuplicateCheck = document.querySelector(".crn-duplicate-check");

// 숫자 외 입력불가 함수
function onlyNumber(event) {
    if (
        event.key === "+" ||
        event.key === "-" ||
        event.key === "." ||
        event.key === "e"
    ) {
        event.preventDefault();
    }
}

// 길이제한 함수
function numberMaxLength() {
    if (crnInput.value.length > 10) {
        crnInput.value = crnInput.value.slice(0, 10);
    }
}

export const crnInput = document.querySelector("#companyRegistrationNumber");
crnInput.addEventListener("keydown", onlyNumber);
crnInput.addEventListener("input", () => {
    numberMaxLength();
    message[5].innerText = "";
});

crnDuplicateCheck.addEventListener("click", async (event) => {
    signup(event).then((resJson) => {
        if (crnInput.value === "") {
            message[5].innerText = "필수 정보입니다.";
        } else if (!/^[0-9]{10,10}/.test(crnInput.value)) {
            message[5].innerText = "사업자등록번호 10자리를 입력해주세요.";
        } else if (
            resJson.company_registration_number &&
            resJson.company_registration_number[0] ===
                "해당 사업자등록번호는 이미 존재합니다."
        ) {
            message[5].innerText = "이미 사용 중인 사업자등록번호입니다.";
        } else {
            message[5].innerText = "사용 가능한 사업자등록번호입니다.";
        }
    });
});

// store_name - 중복 체크, regex
export const storeNameInput = document.querySelector("#storeName");
storeNameInput.addEventListener("input", async (event) => {
    storeNameRegexCheck() && storeNameDuplicateCheck(event);
});

function storeNameRegexCheck() {
    const storeNameRegex = /^[a-zA-Z가-힣 ]+$/;
    if (
        storeNameInput.value === "" ||
        !storeNameRegex.test(storeNameInput.value)
    ) {
        storeNameInput.focus();
        message[6].innerText = "스토어 이름을 다시 확인해주세요.";
        return false;
    }
    return true;
}

function storeNameDuplicateCheck(event) {
    signup(event).then((resJson) => {
        if (
            resJson.store_name &&
            resJson.store_name[0] === "해당 스토어이름은 이미 존재합니다."
        ) {
            message[6].innerText = "이미 사용 중인 스토어 이름입니다.";
        } else {
            message[6].innerText = "사용 가능한 스토어 이름입니다.";
        }
    });
}
