import getProducts from "../../common/api.js";
import SellerNameCard from "./sellerNameCard.js";

class StoreIntroduction {
    constructor() {
        this.div = document.createElement("div");
        this.h2 = document.createElement("h2");
        this.products = {};
        this.productsOnAllPages = [];
    }

    async getProductsData() {
        let count = parseInt(window.localStorage.getItem("count"));
        for (let i = 1; i < count / 15 + 1; i++) {
            const data = await getProducts(i, false);
            this.products = await data.results;
            this.productsOnAllPages.push(...this.products);
        }
        this.h2.setAttribute("class", "title-store");
        const url = window.location.pathname;
        let sellerNumber = parseInt(url.replace(/^\/store\//g, ""));
        const firstElement = this.productsOnAllPages.find((el) => {
            return el.seller === sellerNumber;
        });
        this.h2.innerText = firstElement.store_name;
        const sellerNameCard = new SellerNameCard(firstElement.store_name);
        const root = document.getElementById("root");
        root.appendChild(sellerNameCard.render());
    }

    render() {
        this.getProductsData();
        this.div.setAttribute("class", "style-wrapper-store-introduction");
        this.div.appendChild(this.h2);

        return this.div;
    }
}

export default StoreIntroduction;
