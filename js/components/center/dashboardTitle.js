import { getSeller } from "../../common/api.js";
import ProductUploadButton from "../button/productUploadButton.js";

class DashboardTitle {
    constructor() {
        this.container = document.createElement("div");
        this.store = {};
    }

    async getSellerName() {
        const token = window.localStorage.getItem("token");
        const data = await getSeller(token, 1);
        if (data.results.length === 0) {
            this.store = "상품을 등록해주세요.";
        } else {
            this.store = await data.results[0].store_name;
        }
    }

    async setSellerName() {
        await this.getSellerName();

        this.container.setAttribute("class", "style-container-center-top");

        const containerSeller = document.createElement("div");
        containerSeller.setAttribute(
            "class",
            "style-container-dashboard-seller"
        );

        const title = document.createElement("h3");
        title.setAttribute("class", "center-title3");
        title.innerText = "대시보드";

        const centerTxtSeller = document.createElement("strong");
        centerTxtSeller.setAttribute("class", "center-txt-seller");
        centerTxtSeller.innerText = this.store;

        const productUploadButton = new ProductUploadButton();

        containerSeller.append(title, centerTxtSeller);
        this.container.append(containerSeller, productUploadButton.render());
    }

    render() {
        this.setSellerName();

        return this.container;
    }
}

export default DashboardTitle;
