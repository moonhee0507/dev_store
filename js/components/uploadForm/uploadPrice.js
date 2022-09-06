import { numberFormatter } from "../../common/thousands";

class UploadPrice {
    constructor() {
        this.container = document.createElement("div");
    }

    render() {
        this.container.setAttribute("class", "upload-container price");

        const em = document.createElement("em");
        em.setAttribute("class", "txt-upload-small");
        em.innerText = "판매가";

        const inputContainer = document.createElement("div");
        inputContainer.setAttribute("class", "input-container-price");

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "input-upload-price");

        const span = document.createElement("span");
        span.setAttribute("class", "txt-upload-unit");
        span.innerText = "원";

        input.addEventListener("keyup", numberFormatter);

        this.container.appendChild(em);
        this.container.appendChild(inputContainer);
        inputContainer.appendChild(input);
        inputContainer.appendChild(span);

        return this.container;
    }
}

export default UploadPrice;
