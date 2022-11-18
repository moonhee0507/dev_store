import Header from "../components/header/header.js";
import PayProducts from "../components/payProducts/payProducts.js";
import PayShippingInfo from "../components/payShippingInfo/payShippingInfo.js";
import Footer from "../components/footer/footer.js";

class Payment {
    constructor(header, payProducts, payShippingInfo, footer) {
        this.header = header;
        this.payProducts = payProducts;
        this.payShippingInfo = payShippingInfo;
        this.footer = footer;
    }

    render() {
        const meta = document.createElement("meta");
        meta.name = "viewport";
        meta.content = "width=1200";
        document.querySelector("head").appendChild(meta);

        this.header = new Header();
        this.payProducts = new PayProducts();
        this.payShippingInfo = new PayShippingInfo();
        this.footer = new Footer();

        const header = document.createElement("header");
        header.setAttribute("class", "header");
        header.appendChild(this.header.render());

        const main = document.createElement("main");
        main.setAttribute("class", "max-width");
        const h2 = document.createElement("h2");
        h2.innerText = "주문/결제하기";
        h2.setAttribute("class", "title-payment");
        main.appendChild(h2);
        main.appendChild(this.payProducts.render());
        main.append(this.payShippingInfo.render());

        const footer = document.createElement("footer");
        footer.setAttribute("class", "footer");
        footer.appendChild(this.footer.render());

        const fileLoading = document.createElement("script");
        fileLoading.setAttribute(
            "src",
            "//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"
        );
        document.body.appendChild(fileLoading);

        document.getElementById("root").append(header, main, footer);
    }
}
export default Payment;
