import { API_URL } from "./common/constants";

const idInput = document.querySelector("#username");
const message = document.querySelectorAll(".message");
const signupButton = document.querySelector(".button-signup");
const buyerButton = document.querySelector(".button-buyer");
const sellerButton = document.querySelector(".button-seller");
const additionalForm = document.querySelector("fieldset");
const input = document.querySelectorAll("input");

let passUsername = false;
let passPassword = false;
let passPassword2 = false;
let passName = false;
let passPhoneNumber = false;
let passCRN = false;
let passStoreName = false;
let passAgreement = false;

// 초기화
for (let i = 0; i < input.length; i++) {
    input[i].value = "";
}
// (공통) 빈값 처리
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
const passwordInput = document.querySelector("#password");
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
    }
});

// password2 - 일치
const passwordInput2 = document.querySelector("#password2");
passwordInput2.addEventListener("input", () => {
    if (passwordInput2.value !== passwordInput.value) {
        message[2].innerText = "비밀번호가 일치하지 않습니다.";
        passPassword2 = false;
    } else {
        message[2].innerText = "";
        passPassword2 = true;
    }
});

// name - 빈값
const nameInput = document.querySelector("#name");
nameInput.addEventListener("blur", () => {
    if (nameInput.value === "") {
        message[3].innerText = "필수 정보입니다.";
        passName = false;
    } else {
        message[3].innerText = "";
        passName = true;
    }
});

// phoneNumber - 중복 체크, regex
const phoneNumber = document.querySelectorAll(".phoneNumber");

for (let i = 0; i <= 2; i++) {
    phoneNumber[i].addEventListener("input", (event) => {
        passPhoneNumber = false;
        message[4].classList.remove("possible");
        message[4].innerText = "";
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
            message[4].classList.add("possible");
            message[4].innerText = "사용 가능한 전화번호입니다.";
            passPhoneNumber = true;
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

const crnInput = document.querySelector("#companyRegistrationNumber");
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
        }
    });
});

// store_name - 중복 체크, regex
const storeNameInput = document.querySelector("#storeName");
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
    } else {
        passAgreement = false;
    }
});

function allPass() {
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
        return true;
    } else {
        signupButton.disabled = true;
        signupButton.style.backgroundColor = "#abb5c2";
        signupButton.innerText = "모두 작성해주세요 :)";
        return false;
    }
}

// 버튼 활성화 여부 체크
for (let i = 0; i < input.length; i++) {
    input[i].addEventListener("input", () => {
        // allPass를 0.5초 후 실행
        setTimeout(allPass, 500);
        allPass();
    });
}

// 회원가입 타입에 따른 폼 보여주는 이벤트
let signupType = "";

buyerButton.addEventListener("click", () => {
    additionalForm.hidden = true;
    buyerButton.style.backgroundColor = "inherit";
    sellerButton.style.backgroundColor = "#F2F2F2";
    signupType = "";

    // style remove
    sellerButton.classList.remove("on");
    buyerButton.classList.remove("help");
    // style add
    buyerButton.classList.add("on");
    sellerButton.classList.add("help");

    return signupType;
});
sellerButton.addEventListener("click", () => {
    additionalForm.hidden = false;
    signupType = "_seller";

    sellerButton.style.backgroundColor = "inherit";
    buyerButton.style.backgroundColor = "#F2F2F2";

    // style remove
    buyerButton.classList.remove("on");
    sellerButton.classList.remove("help");
    // style add
    sellerButton.classList.add("on");
    buyerButton.classList.add("help");

    allPass();
    return signupType;
});

// 중복확인 요청 함수
async function eachRequest(event) {
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
async function signup(event) {
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
        if (
            resJson.username &&
            resJson.name &&
            resJson.phone_number &&
            resJson.user_type
        ) {
            window.location.href = "/login";
        } else if (
            resJson.username &&
            resJson.name &&
            resJson.phone_number &&
            resJson.user_type &&
            resJson.company_registration_number &&
            resJson.store_name
        ) {
            window.location.href = "/login";
        }
    } catch (err) {
        console.error(err);
    }
}

signupButton.addEventListener("click", allPass && signup);
