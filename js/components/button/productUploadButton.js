class ProductUploadButton {
    constructor() {
        this.container = document.createElement("div");
    }

    render() {
        this.container.setAttribute("class", "style-container-upload");

        const linkUpload = document.createElement("a");
        linkUpload.setAttribute("href", "/upload");
        linkUpload.setAttribute("class", "link-upload");
        linkUpload.innerText = "상품 업로드";

        this.container.appendChild(linkUpload);

        linkUpload.addEventListener("click", () => {
            window.localStorage.removeItem("edit");
        });

        return this.container;
    }
}

export default ProductUploadButton;
