import Header from "../components/header/header";
import ProductList from "../components/productList/productList";
import Footer from "../components/footer/footer";

class Store {
    constructor(header, productList, footer) {
        this.header = header;
        this.productList = productList;
        this.footer = footer;
    }

    render() {
        this.header = new Header();
        this.productList = new ProductList();
        this.footer = new Footer();

        const header = document.createElement("header");
        header.setAttribute("class", "header");
        header.appendChild(this.header.render());

        const main = document.createElement("main");
        main.setAttribute("class", "max-width");
        main.appendChild(this.productList.render());

        const footer = document.createElement("footer");
        footer.setAttribute("class", "footer");
        footer.appendChild(this.footer.render());

        document.getElementById("root").append(header, main, footer);
    }
}

export default Store;
