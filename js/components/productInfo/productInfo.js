import { getProductsDetail } from "../../common/api.js";
import { ProductInfoCard } from "../productInfoCard/index.js";

class ProductInfo {
    constructor() {
        this.sectionElement = document.createElement("section");
        this.wrapper = document.createElement("div");
        this.info = {};
    }

    // 상품 상세 정보 가져오기
    async getProductData() {
        let id = window.location.pathname.replace(/\D/g, "");
        const data = await getProductsDetail(id);
        this.info = await data;
    }
    // 상세내용 세팅하기
    async setProductInfo() {
        await this.getProductData();
        this.sectionElement.classList.add("section-detail");

        const h2 = document.createElement("h2");
        h2.classList.add("sr-only");
        h2.innerHTML = "상품 구매";

        const productInfoCard = new ProductInfoCard(this.info);
        this.wrapper.append(productInfoCard.render());

        this.sectionElement.append(h2, this.wrapper);
    }

    render() {
        this.wrapper.classList.add("style-wrapper-detail");
        this.setProductInfo();
        this.sectionElement.appendChild(this.wrapper);

        return this.sectionElement;
    }
}

export default ProductInfo;
