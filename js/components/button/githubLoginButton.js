class GithubLoginButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("class", "button-github");
        // const img = document.createElement("img");
        // img.setAttribute("src", "/assets/images/icon-github.png");
        // img.setAttribute("alt", "깃허브로 로그인하기");
        // img.setAttribute("class", "img-github");
        const span = document.createElement("span");
        span.setAttribute("class", "txt-github");
        span.innerText = "깃허브로 로그인";
        this.button.append(span);

        this.button.addEventListener("click", (e) => {
            e.preventDefault();
            const loginURL = `https://github.com/login/oauth/authorize?client_id=${
                import.meta.env.VITE_CLIENT_ID
            }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`;
            window.location.href = loginURL;
        });

        return this.button;
    }
}

export default GithubLoginButton;
