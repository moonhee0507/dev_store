import Header from "../components/header/header.js";
import Slide from "../components/slide/slide.js";
import ProductList from "../components/common/productList/productList.js";
import Footer from "../components/footer/footer.js";
import infiniteScroll from "../common/infiniteScroll.js";
import TopButton from "../components/button/topButton.js";
import Loading from "../common/loading.js";
import verifyAccessToken from "../oauth/verifyAccessToken.js";

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
        const publicKey = await fetch(
            `https://cognito-idp.${import.meta.env.VITE_REGION}.amazonaws.com/${
                import.meta.env.VITE_USER_POOL_ID
            }/.well-known/jwks.json`,
            {
                method: "GET",
            }
        )
            .then((res) => res.json())
            .then((resJson) => resJson.data)
            .catch((e) => console.error(e));

        if (accessToken) localStorage.setItem("accessToken", accessToken);
        if (publicKey) {
            localStorage.setItem("publicKey", JSON.stringify(publicKey));
        }

        verifyAccessToken();
    }

    render() {
        this.getKeyFromCognito();
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
