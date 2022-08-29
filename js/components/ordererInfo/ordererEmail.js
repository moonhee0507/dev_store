class OrdererEmail {
    constructor() {
        this.wrapper = document.createElement("div");
    }

    render() {
        this.wrapper.setAttribute("class", "style-wrapper-inline");

        const inputTitle = document.createElement("div");
        inputTitle.setAttribute("class", "input-title");
        inputTitle.innerText = "이메일";

        const emailContainer = document.createElement("div");
        const input = document.createElement("input");
        input.type = "email";
        input.id = "input-orderer-email";
        input.title = "이메일";

        const message = document.createElement("p");
        message.setAttribute("class", "payment-error-message");

        input.addEventListener("blur", () => {
            const emailRegex =
                /^([\w\.\_\-])*[a-zA-Z0-9]+([\w\.\_\-])*([a-zA-Z0-9])+([\w\.\_\-])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$/g;
            if (input.value === "") {
                message.innerText = "*이메일을 입력해주세요.";
                input.focus();
            } else if (!emailRegex.test(input.value)) {
                message.innerText = "*이메일 형식이 올바르지 않습니다.";
                input.focus();
            } else {
                message.innerText = "";
            }
        });

        emailContainer.appendChild(input);
        this.wrapper.append(inputTitle, emailContainer, message);
        return this.wrapper;
    }
}

export default OrdererEmail;
