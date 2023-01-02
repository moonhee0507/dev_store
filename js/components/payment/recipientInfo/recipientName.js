class RecipientName {
    constructor() {
        this.wrapper = document.createElement("div");
    }

    render() {
        this.wrapper.setAttribute("class", "style-wrapper-inline");

        const inputTitle = document.createElement("strong");
        inputTitle.setAttribute("class", "input-title");
        inputTitle.innerText = "수령인";

        const nameContainer = document.createElement("div");
        nameContainer.setAttribute("class", "recipient-container");

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "input-recipient-name");
        input.setAttribute("title", "수령인");
        input.setAttribute("required", true);

        const message = document.createElement("p");
        message.setAttribute("class", "payment-error-message");

        input.addEventListener("blur", () => {
            if (input.value === "") {
                message.innerText = "*수령인 성함을 입력해주세요.";
                input.focus();
            } else {
                message.innerText = "";
            }
        });

        nameContainer.appendChild(input);
        this.wrapper.append(inputTitle, nameContainer, message);

        return this.wrapper;
    }
}

export default RecipientName;
