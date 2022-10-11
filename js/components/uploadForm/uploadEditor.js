class UploadEditor {
    constructor() {
        this.container = document.createElement("div");
    }

    render() {
        this.container.setAttribute("class", "style-container-upload-detail");

        const em = document.createElement("em");
        em.setAttribute("class", "txt-upload-small");
        em.innerText = "상품 상세 정보";

        const editor = document.createElement("div");
        editor.setAttribute("class", "editor");

        const textarea = document.createElement("textarea");
        textarea.setAttribute("id", "upload-textarea");
        textarea.setAttribute("required", true);
        textarea.setAttribute("name", "product-info");

        this.container.appendChild(em);
        this.container.appendChild(textarea);

        if (window.localStorage.getItem("edit")) {
            textarea.innerText = JSON.parse(
                window.localStorage.getItem("edit")
            ).product_info;
        }

        return this.container;
    }
}

export default UploadEditor;
