import LoginType from "../components/login/loginType.js";
import IdInput from "../components/login/idInput.js";
import PasswordInput from "../components/login/passwordInput.js";
import LoginErrorMessage from "../components/login/loginErrorMessage.js";
import { LoginButton, GithubLoginButton } from "../components/button/index.js";

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

        logoElement.src = "/assets/images/logo.svg";
        logoElement.alt = "Logo";
        linkLogo.appendChild(logoElement);
        h1.appendChild(linkLogo);

        const styleWrapper = document.createElement("div");
        styleWrapper.classList.add("style-wrapper");
        formElement.appendChild(styleWrapper);

        const loginType = new LoginType();
        styleWrapper.appendChild(loginType.render());

        const styleContainer = document.createElement("div");
        styleContainer.classList.add("style-container");
        styleWrapper.appendChild(styleContainer);

        const idInput = new IdInput();
        const passwordInput = new PasswordInput();
        const loginErrorMessage = new LoginErrorMessage();
        const loginButton = new LoginButton();
        const githubLoginButton = new GithubLoginButton();
        styleContainer.append(
            idInput.render(),
            passwordInput.render(),
            loginErrorMessage.render(),
            loginButton.render(),
            githubLoginButton.render()
        );
        const linkSignup = document.createElement("a");
        const linkSearchPassword = document.createElement("a");
        linkSignup.classList.add("link-signup");
        linkSearchPassword.classList.add("link-search-password");
        linkSignup.innerText = "회원가입";
        linkSearchPassword.innerText = "비밀번호 찾기";
        linkSignup.setAttribute("href", "/signup");

        divElement.appendChild(linkSignup);
        divElement.appendChild(linkSearchPassword);
        logoElement.addEventListener("click", () => {
            window.location.href = "/";
        });

        return this.sectionElement;
    }
}

export default Login;
