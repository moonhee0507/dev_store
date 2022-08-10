import {
    signupType,
    idInput,
    message,
    eachRequest,
    signupButton,
} from "./signupFeat";

let passUsername = false;
let passPassword = false;
let passPassword2 = false;
let passName = false;
let passPhoneNumber = false;
let passCRN = false;
let passStoreName = false;
let passAgreement = false;

// (공통) 빈값 처리
export const input = document.querySelectorAll("input");
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
    passUsername = false;
    // 회원가입 요청 함수 재사용
    eachRequest(event).then((resJson) => {
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
            message[0].classList.add("possible");
            message[0].innerText = "사용 가능한 아이디입니다.";
            passUsername = true;
            console.log("passUsername", passUsername);
        }
    });
});
// 중복확인 클릭 안내, 값 변경 시 pass false
idInput.addEventListener("input", () => {
    message[0].classList.remove("possible");
    passUsername = false;
    if (idInput.value !== "") {
        message[0].innerText = "입력 후 중복확인 버튼을 눌러주세요.";
    }
});

// password - regex(영문, 숫자, 특수문자 포함 8자 이상 && 소문자, 숫자 1개 이상 필수)
export const passwordInput = document.querySelector("#password");
const passwordRegex =
    /^(?=.*[a-z])(?=.*[0-9])[a-z0-9A-Z\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{8,}$/;

passwordInput.addEventListener("input", () => {
    if (!passwordRegex.test(passwordInput.value)) {
        message[1].innerText =
            "8자 이상 영문, 숫자, 특수문자를 사용하세요(소문자, 숫자 각1자 이상 필수).";
        passPassword = false;
    } else {
        message[1].innerText = "";
        passPassword = true;
        console.log("passPassword", passPassword);
    }
});

// password2 - 일치
export const passwordInput2 = document.querySelector("#password2");
passwordInput2.addEventListener("input", () => {
    if (passwordInput2.value !== passwordInput.value) {
        message[2].innerText = "비밀번호가 일치하지 않습니다.";
        passPassword2 = false;
    } else {
        message[2].innerText = "";
        passPassword2 = true;
        console.log("passPassword2", passPassword2);
    }
});

// name - 빈값
export const nameInput = document.querySelector("#name");
nameInput.addEventListener("blur", () => {
    if (nameInput.value === "") {
        message[3].innerText = "필수 정보입니다.";
        passName = false;
    } else {
        message[3].innerText = "";
        passName = true;
        console.log("passName", passName);
    }
});

// phoneNumber - 중복 체크, regex
export const phoneNumber = document.querySelectorAll(".phoneNumber");

for (let i = 0; i <= 2; i++) {
    phoneNumber[i].addEventListener("input", (event) => {
        passPhoneNumber = false;
        phoneNumberRegexCheck() && phoneNumberDuplicateCheck(event);
    });
}

function phoneNumberRegexCheck() {
    const middleRegex = /^[0-9]{3,4}/;
    const lastRegex = /^[0-9]{4}/;

    if (
        phoneNumber[1].value === "" ||
        !middleRegex.test(phoneNumber[1].value)
    ) {
        message[4].innerText = "전화번호를 올바르게 입력해주세요.";
        return false;
    } else if (
        phoneNumber[2].value === "" ||
        !lastRegex.test(phoneNumber[2].value)
    ) {
        message[4].innerText = "전화번호를 올바르게 입력해주세요.";
        return false;
    }
    return true;
}

function phoneNumberDuplicateCheck(event) {
    eachRequest(event).then((resJson) => {
        if (
            resJson.phone_number &&
            resJson.phone_number[0] ===
                "해당 사용자 전화번호는 이미 존재합니다."
        ) {
            message[4].innerText = resJson.phone_number[0];
        } else {
            message[4].innerText = "";
            passPhoneNumber = true;
            console.log("passPhoneNumber", passPhoneNumber);
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
    passCRN = false;
    message[5].innerText = "";
});

crnDuplicateCheck.addEventListener("click", async (event) => {
    message[5].classList.remove("possible");
    eachRequest(event).then((resJson) => {
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
            message[5].classList.add("possible");
            passCRN = true;
            console.log("passCRN", passCRN);
        }
    });
});

// store_name - 중복 체크, regex
export const storeNameInput = document.querySelector("#storeName");
storeNameInput.addEventListener("input", async (event) => {
    passStoreName = false;
    message[6].classList.remove("possible");
    message[6].innerText = "";
    storeNameRegexCheck() && storeNameDuplicateCheck(event);
});

function storeNameRegexCheck() {
    const storeNameRegex = /^[a-zA-Z가-힣 ]+$/;
    if (
        storeNameInput.value === "" ||
        storeNameInput.value === " " ||
        !storeNameRegex.test(storeNameInput.value) ||
        /\s+(\s)/.test(storeNameInput.value)
        // 전체 글자에서 연속된 공백이 2개 이상
    ) {
        storeNameInput.focus();
        message[6].innerText = "스토어 이름을 다시 확인해주세요.";
        return false;
    }
    return true;
}

function storeNameDuplicateCheck(event) {
    eachRequest(event).then((resJson) => {
        if (
            resJson.store_name &&
            resJson.store_name[0] === "해당 스토어이름은 이미 존재합니다."
        ) {
            message[6].innerText = "이미 사용 중인 스토어 이름입니다.";
        } else {
            message[6].innerText = "사용 가능한 스토어 이름입니다.";
            message[6].classList.add("possible");
            passStoreName = true;
            console.log("passStoreName", passStoreName);
        }
    });
}

// PIA - 체크여부
const agreementCheckbox = document.querySelector(
    "#personalInfomationAgreement"
);
agreementCheckbox.addEventListener("click", () => {
    if (agreementCheckbox.checked === true) {
        passAgreement = true;
        console.log("passAgreement", passAgreement);
    } else {
        passAgreement = false;
    }
});

export function allPass() {
    if (
        !signupType &&
        passUsername &&
        passPassword &&
        passPassword2 &&
        passName &&
        passPhoneNumber &&
        passAgreement
    ) {
        signupButton.disabled = false;
        signupButton.style.backgroundColor = "#334863";
        signupButton.innerText = "시작하기";
        signupButton.style.cursor = "pointer";
        console.log("allPass 트루로 들어왔음!");
        return true;
    } else if (
        signupType &&
        passUsername &&
        passPassword &&
        passPassword2 &&
        passName &&
        passPhoneNumber &&
        passCRN &&
        passStoreName &&
        passAgreement
    ) {
        signupButton.disabled = false;
        signupButton.style.backgroundColor = "#334863";
        signupButton.innerText = "시작하기";
        signupButton.style.cursor = "pointer";
        console.log("allPass 트루로 들어왔음!");
        return true;
    } else {
        signupButton.disabled = true;
        signupButton.style.backgroundColor = "#abb5c2";
        signupButton.innerText = "모두 작성해주세요 :)";
        console.log("allPass 뽤스로 들어왔음!");
        return false;
    }
}

// 버튼 활성화 여부 체크
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("input", () => {
        allPass();
        console.log(
            signupType,
            passUsername,
            passPassword,
            passPassword2,
            passName,
            passPhoneNumber,
            passCRN,
            passStoreName,
            passAgreement
        );
    });
}
