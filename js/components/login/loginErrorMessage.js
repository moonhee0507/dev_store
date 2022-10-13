class LoginErrorMessage {
    constructor() {
        this.strong = document.createElement("strong");
    }

    render() {
        this.strong.setAttribute("class", "error-message");
        return this.strong;
    }
}

export default LoginErrorMessage;
