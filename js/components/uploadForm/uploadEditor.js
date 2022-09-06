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
        const p = document.createElement("p");
        p.innerText = "editor area";

        this.container.appendChild(em);
        this.container.appendChild(editor);
        editor.appendChild(p);

        return this.container;
    }
}

export default UploadEditor;
