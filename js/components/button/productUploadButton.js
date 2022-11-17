class ProductUploadButton {
    constructor() {
        this.container = document.createElement("div");
    }

    render() {
        this.container.setAttribute("class", "style-container-upload");

        const linkUpload = document.createElement("a");
        linkUpload.setAttribute("href", "/upload");
        linkUpload.setAttribute("class", "link-upload");

        this.container.appendChild(linkUpload);

        linkUpload.addEventListener("click", () => {
            window.localStorage.removeItem("edit");
        });

        const vw = window.matchMedia(`(max-width: 500px)`);
        linkUpload.innerText = vw.matches ? "" : "상품 업로드";
        vw.addEventListener("change", (e) => {
            linkUpload.innerHTML = e.matches ? "" : "상품 업로드";
        });

        return this.container;
    }
}

export default ProductUploadButton;
