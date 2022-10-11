class Signup {
    constructor() {
        this.sectionElement = document.createElement("section");
    }

    render() {
        const h1 = document.createElement("h1");
        h1.setAttribute("class", "signup-header");
        const linkLogo = document.createElement("a");
        linkLogo.setAttribute("class", "link-logo");
        linkLogo.setAttribute("href", "/");

        const logoElement = document.createElement("img");
        const formElement = document.createElement("form");

        this.sectionElement.classList.add("section-signup");

        logoElement.classList.add("logo");
        formElement.classList.add("form-signup");

        this.sectionElement.appendChild(h1);
        this.sectionElement.appendChild(formElement);

        logoElement.src = "/assets/images/logo.svg";
        logoElement.alt = "Logo";
        linkLogo.appendChild(logoElement);
        h1.appendChild(linkLogo);

        const styleWrapper = document.createElement("div");
        const agreementWrapper = document.createElement("div");
        const signupButton = document.createElement("button");
        styleWrapper.classList.add("style-wrapper");
        agreementWrapper.classList.add("agreement-wrapper");
        signupButton.classList.add("button-signup");
        signupButton.type = "submit";
        signupButton.disabled = true;
        signupButton.innerText = "모두 작성해주세요 :)";
        formElement.appendChild(styleWrapper);
        formElement.appendChild(agreementWrapper);
        formElement.appendChild(signupButton);

        const signupType = document.createElement("div");
        signupType.classList.add("signup-type");
        styleWrapper.appendChild(signupType);
        signupType.innerHTML = `
            <button type="button" class="button-buyer on">구매회원가입</button>
            <button type="button" class="button-seller help">판매회원가입</button>
        `;

        const mainInputs = document.createElement("div");
        mainInputs.classList.add("style-container");
        styleWrapper.appendChild(mainInputs);
        mainInputs.innerHTML = `
            <label for="username" class="label-block">아이디</label>
            <input id="username" class="input-signup-username" type="text" minlength="5" maxlength="20"
                placeholder="영문 및 숫자(5자 이상 20자 이내)" autofocus required>
            <button type="button" class="username-duplicate-check">중복확인</button>
            <strong class="message"></strong>

            <label for="password" class="label-block">비밀번호</label>
            <input id="password" type="password" minlength="8" placeholder="영문, 숫자, 특수문자(8자 이상)" required>
            <strong class="message"></strong>

            <label for="password2" class="label-block">비밀번호 재확인</label>
            <input id="password2" type="password" required>
            <strong class="message"></strong>

            <label for="name" class="label-block">이름</label>
            <input id="name" type="text" maxlength="10" required>
            <strong class="message"></strong>

            <label for="phoneNumber" class="label-block">휴대폰번호</label>
            <select class="phoneNumber first" name="phoneNumber-first" required>
                <option value="010">010</option>
            </select>

            <input id="phoneNumber" class="phoneNumber middle" type="tel" minlength="3" maxlength="4" required>

            <label for="phoneNumberLast"></label>
            <input id="phoneNumberLast" class="phoneNumber last" type="tel" maxlength="4" required>
            <strong class="message"></strong>

            <fieldset hidden>
                <legend class="sr-only">판매자 추가 입력사항</legend>

                <label for="companyRegistrationNumber" class="label-block">사업자 등록번호</label>
                <input id="companyRegistrationNumber" type="number" placeholder="- 제외" required>
                <button type="button" class="crn-duplicate-check">인증</button>
                <strong class="message"></strong>

                <label for="storeName" class="label-block">스토어 이름</label>
                <input id="storeName" type="text" maxlength="30" required>
                <strong class="message"></strong>
            </fieldset>
        `;

        const checkWrapper = document.createElement("span");
        checkWrapper.classList.add("pia-check-wrapper");
        checkWrapper.innerHTML = `
            <input id="personalInfomationAgreement" type="checkbox" required>
            <label for="personalInfomationAgreement" class="label-pia">
                데브 스토어의 <strong class="important">이용약관</strong> 및
                <strong class="important">개인정보처리방침</strong>에 대한
                내용을 확인하였고 동의합니다.
            </label>
        `;
        agreementWrapper.appendChild(checkWrapper);

        const policyBox = document.createElement("div");
        policyBox.classList.add("policy-box");
        policyBox.innerHTML = `
            <p class="policy-text">
                <em class="first-sentence">데브 스토어 서비스 및 제품(이하 ‘서비스’)을 이용해 주셔서 감사합니다.</em>
                본 약관은 다양한 데브 스토어 서비스의 이용과 관련하여 데브 스토어 서비스를 제공하는 데브 스토어
                주식회사(이하 ‘데브 스토어’)와 이를 이용하는 데브 스토어 서비스 회원(이하 ‘회원’) 또는 비회원과의 관계를 설명하며, 아울러 여러분의 데브 스토어 서비스 이용에 도움이
                될 수
                있는 유익한 정보를 포함하고 있습니다.
            </p>
            <p class="policy-text">
                데브 스토어 서비스를 이용하시거나 데브 스토어 서비스 회원으로 가입하실 경우 여러분은 본 약관 및 관련 운영 정책을 확인하거나 동의하게 되므로, 잠시 시간을 내시어 주의
                깊게
                살펴봐 주시기 바랍니다.
            </p>
            <p class="policy-text">
                다양한 데브 스토어 서비스를 즐겨보세요. 데브 스토어 서비스에는 기본적으로 본 약관이 적용됩니다만, 부득이 각 개별 서비스의 고유한 특성을 반영하기 위해 본 약관 외 별도의
                약관,
                운영정책이 추가로 적용될 때가 있습니다.
                따라서 별도의 약관, 운영정책에서 그 개별 서비스 제공에 관하여 본 약관, 계정 및 게시물 운영정책과 다르게 정한 경우에는 별도의 약관, 운영정책이 우선하여 적용됩니다.
                이러한 내용은 각각의 개별 서비스 초기 화면에서 확인해 주시기 바랍니다.
            </p>
            <p class="policy-text">
                본 약관은 한국어를 정본으로 합니다. 본 약관 또는 데브 스토어 서비스와 관련된 여러분과 데브 스토어와의 관계에는 대한민국의 법령이 적용됩니다. 그리고 본 약관 또는
                데브스토어
                서비스와 관련하여 여러분과 데브 스토어 사이에 분쟁이 발생할 경우, 그 분쟁의 처리는 대한민국 '민사소송법'에서 정한 절차를 따릅니다.
            </p>
            <p class="policy-text">공지 일자: 2022년 8월 9일</p>
            <p class="policy-text">적용 일자: 2022년 8월 9일</p>
            <p class="policy-text">
                데브 스토어 서비스와 관련하여 궁금하신 사항이 있으시면 고객센터(대표번호: 0000 – 0000/ 평일 09:00~18:00)로 문의 주시기 바랍니다.
            </p>
        `;
        agreementWrapper.appendChild(policyBox);

        const body = document.querySelector("body");
        const signupFeat = document.createElement("script");
        signupFeat.type = "module";
        signupFeat.src = "../js/signupFeat.js";
        body.appendChild(signupFeat);

        logoElement.addEventListener("click", () => {
            window.location.href = "/";
        });

        return this.sectionElement;
    }
}

export default Signup;
