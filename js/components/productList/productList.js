import getProducts from "../../common/api.js";
import { ProductCard } from "../productCard/index.js";

class ProductList {
    constructor() {
        this.sectionElement = document.createElement("section");
        this.products = {};
        this.productsOnAllPages = [];
    }

    async getProductsData() {
        if (window.location.pathname === "/") {
            const data = await getProducts(1, true);
            this.products = await data.results;
        } else if (window.location.pathname.includes("/store")) {
            let count = parseInt(window.localStorage.getItem("count"));
            for (let i = 1; i < count / 15 + 1; i++) {
                const data = await getProducts(i, false);
                this.products = await data.results.filter((el) => {
                    const sellerNumber = window.location.pathname.replace(
                        /^\/store\//g,
                        ""
                    );
                    return el.seller === parseInt(sellerNumber);
                });
                this.productsOnAllPages.push(...this.products);
            }
        }
    }

    async setProductList() {
        await this.getProductsData();
        this.sectionElement.classList.add("section-products");

        const productList = document.createElement("ul");
        productList.classList.add("list-products");

        let products =
            window.location.pathname === "/"
                ? this.products
                : this.productsOnAllPages;

        products.forEach((item) => {
            const productItem = document.createElement("li");
            const productCard = new ProductCard(item);
            productItem.appendChild(productCard.render());
            productList.appendChild(productItem);
        });
        const spinner = document.createElement("div");
        spinner.setAttribute("id", "spinner");
        this.sectionElement.append(
            productList,
            window.location.pathname === "/" && spinner
        );
    }

    render() {
        this.setProductList();
        const h3 = document.createElement("h3");
        h3.setAttribute("class", "sr-only");
        h3.innerText = "상품 리스트";
        this.sectionElement.appendChild(h3);

        return this.sectionElement;
    }
}

export default ProductList;
