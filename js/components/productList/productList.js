import { API_URL } from "../../common/constants";
import { ProductCard } from "../productCard/index.js";

class ProductList {
    constructor() {
        this.sectionElement = document.createElement("section");
        this.products = {};
    }

    // 전체 상품 정보 가져오기
    async getProductsData() {
        const res = await fetch(`${API_URL}/products/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        if (window.location.pathname === "/") {
            this.products = await data.results;
        } else if (window.location.pathname.includes("/store")) {
            this.products = await data.results.filter((el) => {
                const sellerNumber = window.location.pathname.replace(
                    /^\/store\//g,
                    ""
                );
                return el.seller === parseInt(sellerNumber);
            });
        }
    }

    // 상품 리스트 세팅하기
    async setProductList() {
        await this.getProductsData();
        console.log(this.products);
        this.sectionElement.classList.add("section-products");

        const productList = document.createElement("ul");
        productList.classList.add("list-products");

        this.products.forEach((item) => {
            const productItem = document.createElement("li");
            const productCard = new ProductCard(item);
            productItem.appendChild(productCard.render());
            productList.appendChild(productItem);
        });

        this.sectionElement.append(productList);
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
