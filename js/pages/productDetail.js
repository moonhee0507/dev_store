import Header from "../components/header/header.js";
import {
    ProductInfo,
    ProductTab,
} from "../components/common/productInfo/index.js";
import { GoToLoginModal } from "../components/modal/index.js";
import Footer from "../components/footer/footer.js";
import Loading from "../common/loading.js";

class ProductDetail {
    constructor(header, productInfo, productTab, goToLoginModal, footer) {
        this.header = header;
        this.productInfo = productInfo;
        this.productTab = productTab;
        this.goToLoginModal = goToLoginModal;
        this.footer = footer;
    }

    render() {
        const loading = new Loading();
        const root = document.getElementById("root");
        root.appendChild(loading.render());

        this.header = new Header();
        this.productInfo = new ProductInfo();
        this.productTab = new ProductTab();
        this.goToLoginModal = new GoToLoginModal();
        this.footer = new Footer();

        const header = document.createElement("header");
        header.setAttribute("class", "header");
        header.appendChild(this.header.render());

        const main = document.createElement("main");
        main.setAttribute("class", "max-width");
        main.appendChild(this.productInfo.render());
        main.appendChild(this.productTab.render());
        main.appendChild(this.goToLoginModal.render());

        const footer = document.createElement("footer");
        footer.setAttribute("class", "footer");
        footer.appendChild(this.footer.render());

        setTimeout(() => {
            root.removeChild(root.firstChild);
        }, 2000);

        document.getElementById("root").append(header, main, footer);
    }
}

export default ProductDetail;
