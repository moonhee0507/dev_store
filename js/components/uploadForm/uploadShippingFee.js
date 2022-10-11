import { numberFormatter } from "../../common/thousands";

class UploadShippingFee {
    constructor() {
        this.container = document.createElement("div");
    }

    render() {
        this.container.setAttribute("class", "upload-container shippingfee");

        const em = document.createElement("em");
        em.setAttribute("class", "txt-upload-small");
        em.innerText = "기본 배송비";

        const inputContainer = document.createElement("div");
        inputContainer.setAttribute("class", "input-container-shippingfee");

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "input-upload-shippingfee");
        input.setAttribute("name", "shipping-fee");

        const span = document.createElement("span");
        span.setAttribute("class", "txt-upload-unit");
        span.innerText = "원";

        this.container.appendChild(em);
        this.container.appendChild(inputContainer);
        inputContainer.appendChild(input);
        inputContainer.appendChild(span);

        input.addEventListener("keyup", numberFormatter);

        if (window.localStorage.getItem("edit")) {
            input.value = parseInt(
                JSON.parse(window.localStorage.getItem("edit")).shipping_fee
            ).toLocaleString("ko-KR");
        }

        return this.container;
    }
}

export default UploadShippingFee;
