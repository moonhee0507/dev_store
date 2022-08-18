class Login {
    constructor() {
        this.sectionElement = document.createElement("section");
    }

    render() {
        const h1 = document.createElement("h1");
        h1.setAttribute("class", "login-header");
        const linkLogo = document.createElement("a");
        linkLogo.setAttribute("class", "link-logo");
        linkLogo.setAttribute("href", "/");

        const logoElement = document.createElement("img");
        const formElement = document.createElement("form");
        const divElement = document.createElement("div");

        this.sectionElement.classList.add("section-login");

        logoElement.classList.add("logo");
        formElement.classList.add("form-login");
        divElement.classList.add("style-link");

        this.sectionElement.appendChild(h1);
        this.sectionElement.appendChild(formElement);
        this.sectionElement.appendChild(divElement);

        // 이미지
        logoElement.src = "../images/logo.svg";
        logoElement.alt = "Logo";
        linkLogo.appendChild(logoElement);
        h1.appendChild(linkLogo);

        // 폼
        const styleWrapper = document.createElement("div");
        styleWrapper.classList.add("style-wrapper");
        formElement.appendChild(styleWrapper);

        const loginType = document.createElement("div");
        loginType.classList.add("login-type");
        styleWrapper.appendChild(loginType);

        loginType.innerHTML = `
            <button type="button" class="button-buyer" name="button-buyer" value="BUYER">
                구매회원 로그인
            </button>
            <button type="button" class="button-seller" name="button-seller" value="SELLER">
                판매회원 로그인
            </button>
        `;

        const styleContainer = document.createElement("div");
        styleContainer.classList.add("style-container");
        styleWrapper.appendChild(styleContainer);

        styleContainer.innerHTML = `
            <label for="username" class="sr-only">아이디</label>
            <input id="username" class="input-login-username" type="text" placeholder="아이디" required>

            <label for="password" class="sr-only">비밀번호</label>
            <input id="password" class="input-login-password" type="password" placeholder="비밀번호" required>

            <strong class="error-message"></strong>

            <button type="submit" class="button-login" disabled>로그인</button>
        `;

        // 하단 링크
        const linkSignup = document.createElement("a");
        const linkSearchPassword = document.createElement("a");
        linkSignup.classList.add("link-signup");
        linkSearchPassword.classList.add("link-search-password");
        linkSignup.innerText = "회원가입";
        linkSearchPassword.innerText = "비밀번호 찾기";
        linkSignup.setAttribute("href", "/signup");

        divElement.appendChild(linkSignup);
        divElement.appendChild(linkSearchPassword);

        // 스크립트
        const body = document.querySelector("body");
        const loginFeat = document.createElement("script");
        loginFeat.type = "module";
        loginFeat.src = "../js/loginFeat.js";
        body.appendChild(loginFeat);

        logoElement.addEventListener("click", () => {
            window.location.pathname = "/";
        });

        return this.sectionElement;
    }
}

export default Login;
