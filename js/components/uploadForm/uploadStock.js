import { numberFormatter } from "../../common/thousands";

class UploadStock {
    constructor() {
        this.container = document.createElement("div");
    }

    render() {
        this.container.setAttribute("class", "upload-container stock");

        const em = document.createElement("em");
        em.setAttribute("class", "txt-upload-small");
        em.innerText = "재고";

        const inputContainer = document.createElement("div");
        inputContainer.setAttribute("class", "input-container-stock");

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "input-upload-stock");
        input.setAttribute("name", "product-stock");

        const span = document.createElement("span");
        span.setAttribute("class", "txt-upload-unit");
        span.innerText = "개";

        this.container.appendChild(em);
        this.container.appendChild(inputContainer);
        inputContainer.appendChild(input);
        inputContainer.appendChild(span);

        input.addEventListener("keyup", numberFormatter);

        // 수정버튼
        if (window.localStorage.getItem("edit")) {
            input.value = parseInt(
                JSON.parse(window.localStorage.getItem("edit")).stock
            ).toLocaleString("ko-KR");
        }

        return this.container;
    }
}

export default UploadStock;
