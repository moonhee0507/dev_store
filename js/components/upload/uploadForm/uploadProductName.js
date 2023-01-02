class UploadProductName {
    constructor() {
        this.container = document.createElement("div");
    }

    render() {
        this.container.setAttribute("class", "upload-container productname");

        const em = document.createElement("em");
        em.setAttribute("class", "txt-upload-small");
        em.innerText = "상품명";

        const inputContainer = document.createElement("div");
        inputContainer.setAttribute("class", "input-container-productname");

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "input-upload-productname");
        input.setAttribute("name", "product-name");
        input.setAttribute("maxlength", "20");
        input.setAttribute("minlength", "4");
        input.placeholder = "4~20자 이내";

        const span = document.createElement("span");
        span.setAttribute("class", "txt-char-limit");

        const currentChar = document.createElement("span");
        currentChar.setAttribute("class", "txt-current-char");
        currentChar.innerText = "0";

        const limitChar = "/20";

        this.container.appendChild(em);
        this.container.appendChild(inputContainer);
        inputContainer.appendChild(input);
        inputContainer.appendChild(span);
        span.append(currentChar, limitChar);

        input.addEventListener("input", () => {
            currentChar.innerText = input.value.length;
        });

        input.addEventListener("blur", () => {
            if (parseInt(input.value.length) < 4) {
                input.focus();
            }
        });

        input.addEventListener("keyup", (e) => {
            if (parseInt(input.value.length) > parseInt(input.maxLength)) {
                input.value = input.value.substring(
                    0,
                    parseInt(input.maxLength)
                );
                e.preventDefault();
                currentChar.innerText = input.value.length;
            }
        });

        if (window.localStorage.getItem("edit")) {
            input.value = JSON.parse(
                window.localStorage.getItem("edit")
            ).product_name;
        }

        return this.container;
    }
}

export default UploadProductName;
