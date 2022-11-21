class OrdererName {
    constructor() {
        this.wrapper = document.createElement("div");
    }

    render() {
        this.wrapper.setAttribute("class", "style-wrapper-inline");

        const inputTitle = document.createElement("strong");
        inputTitle.setAttribute("class", "input-title");
        inputTitle.innerText = "이름";

        const nameContainer = document.createElement("div");
        nameContainer.setAttribute("class", "orderer-name-container");

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "input-orderer-name");
        input.setAttribute("title", "주문자");
        input.setAttribute("required", true);
        input.setAttribute("autofocus", true);

        const message = document.createElement("p");
        message.setAttribute("class", "payment-error-message");

        input.addEventListener("blur", () => {
            if (input.value === "") {
                message.innerText = "*주문자 성함을 입력해주세요.";
            } else {
                message.innerText = "";
            }
        });

        nameContainer.appendChild(input);
        this.wrapper.append(inputTitle, nameContainer, message);

        return this.wrapper;
    }
}

export default OrdererName;
