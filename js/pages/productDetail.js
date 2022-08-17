import Header from "../components/header/header.js";
import { ProductInfo, ProductTab } from "../components/productInfo/index.js";
import Footer from "../components/footer/footer.js";

class ProductDetail {
    constructor(header, productInfo, productTab, footer) {
        this.header = header;
        this.productInfo = productInfo;
        this.productTab = productTab;
        this.footer = footer;
    }

    render() {
        this.header = new Header();
        this.productInfo = new ProductInfo();
        this.productTab = new ProductTab();
        this.footer = new Footer();

        const header = document.createElement("header");
        header.setAttribute("class", "header");
        header.appendChild(this.header.render());

        const main = document.createElement("main");
        main.setAttribute("class", "max-width");
        main.appendChild(this.productInfo.render());
        main.appendChild(this.productTab.render());

        const footer = document.createElement("footer");
        footer.setAttribute("class", "footer");
        footer.appendChild(this.footer.render());

        document.getElementById("root").append(header, main, footer);
    }
}

export default ProductDetail;
