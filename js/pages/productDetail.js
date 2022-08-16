import Header from "../components/header/header.js";
import ProductInfo from "../components/productInfo/productInfo.js";

class ProductDetail {
    constructor(header, productInfo) {
        this.header = header;
        this.productInfo = productInfo;
    }

    render() {
        this.header = new Header();
        this.productInfo = new ProductInfo();

        const header = document.createElement("header");
        header.setAttribute("class", "header");
        header.appendChild(this.header.render());

        const main = document.createElement("main");
        main.setAttribute("class", "max-width");
        main.appendChild(this.productInfo.render());

        document.getElementById("root").append(header, main);
    }
}

export default ProductDetail;
