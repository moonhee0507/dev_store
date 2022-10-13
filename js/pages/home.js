import Header from "../components/header/header.js";
import Slide from "../components/slide/slide.js";
import ProductList from "../components/productList/productList.js";
import Footer from "../components/footer/footer.js";
import infiniteScroll from "../common/infiniteScroll.js";
import TopButton from "../components/button/topButton.js";

class Home {
    constructor(header, slide, productList, footer) {
        this.header = header;
        this.slide = slide;
        this.productList = productList;
        this.footer = footer;
    }

    render() {
        this.header = new Header();
        this.slide = new Slide();
        this.productList = new ProductList();
        this.footer = new Footer();

        const header = document.createElement("header");
        header.setAttribute("class", "header");
        header.appendChild(this.header.render());

        const main = document.createElement("main");
        main.setAttribute("class", "max-width");
        main.appendChild(this.slide.render());
        main.appendChild(this.productList.render());

        const footer = document.createElement("footer");
        footer.setAttribute("class", "footer");
        footer.appendChild(this.footer.render());

        const topButton = new TopButton();

        const root = document.getElementById("root");
        root.append(header, main, footer, topButton.render());
        setTimeout(() => {
            infiniteScroll();
        }, 2000);
    }
}

export default Home;
