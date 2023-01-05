import Header from "../components/header/header.js";
import Slide from "../components/slide/slide.js";
import ProductList from "../components/common/productList/productList.js";
import Footer from "../components/footer/footer.js";
import infiniteScroll from "../common/infiniteScroll.js";
import TopButton from "../components/button/topButton.js";
import Loading from "../common/loading.js";
import verifyAccessToken from "../oauth/verifyAccessToken.js";
import verifyIdToken from "../oauth/verifyIdToken.js";

class Home {
    constructor(header, slide, productList, footer) {
        this.header = header;
        this.slide = slide;
        this.productList = productList;
        this.footer = footer;
    }

    async getKeyFromCognito() {
        const queryString = window.location.hash;
        const paramFromURL = new URLSearchParams(queryString);
        const accessToken = paramFromURL.get("access_token");
        const idToken = paramFromURL.get("#id_token");

        if (accessToken) localStorage.setItem("token", accessToken);

        (await verifyAccessToken(accessToken)) &&
            (await verifyIdToken(idToken));
    }

    render() {
        if (window.location.hash !== "" && !localStorage.getItem("token")) {
            setTimeout(() => {
                this.getKeyFromCognito();
            }, 2000);
        }

        const loading = new Loading();
        const root = document.getElementById("root");
        root.appendChild(loading.render());

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

        root.append(header, main, footer, topButton.render());
        setTimeout(() => {
            infiniteScroll();
            root.removeChild(root.firstChild);
        }, 2000);
    }
}

export default Home;
