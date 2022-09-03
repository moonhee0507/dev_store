import ProductUploadButton from "../button/productUploadButton.js";

class DashboardTitle {
    constructor() {
        this.container = document.createElement("div");
    }

    render() {
        this.container.setAttribute("class", "style-container-center-top");

        const containerSeller = document.createElement("div");
        containerSeller.setAttribute(
            "class",
            "style-container-dashboard-seller"
        );

        const title = document.createElement("h3");
        title.innerText = "대시보드";

        const centerTxtSeller = document.createElement("strong");
        centerTxtSeller.setAttribute("class", "center-txt-seller");
        centerTxtSeller.innerText = "백엔드 글로벌";

        const productUploadButton = new ProductUploadButton();

        containerSeller.append(title, centerTxtSeller);
        this.container.append(containerSeller, productUploadButton.render());
        return this.container;
    }
}

export default DashboardTitle;
