import { API_URL } from "../../common/constants";
import { ascending, descending, newItemOrder } from "../../common/sort";
import SearchListItem from "./searchListItem";
import ProductCard from "../productCard/productCard.js";

class SearchList {
    constructor() {
        this.wrapper = document.createElement("div");
        this.results = {};
    }

    async getProductData() {
        const res = await fetch(`${API_URL}/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        const data = await res.json();
        if (data.count === 0) {
            // 검색결과 없음 처리
        } else {
            this.results = await data.results.filter((el) => {
                const keyword = document.getElementById("searchProducts").value;
                return el.product_name.includes(keyword);
            });
        }
    }

    async setProductList() {
        await this.getProductData();
        this.wrapper.setAttribute("class", "style-wrapper-search");
        let products = this.results;
        let wrapper = this.wrapper;
        const ul = document.createElement("ul");

        paintProducts(products);

        function paintProducts(products) {
            ul.classList.remove("list-products");
            let result = products.forEach((item) => {
                const li = document.createElement("li");
                li.setAttribute("class", "list-search-items");
                const searchListItem = new SearchListItem(item);
                li.appendChild(searchListItem.render());
                ul.appendChild(li);
            });
            wrapper.appendChild(ul);
            return result;
        }

        const buttonLowPrice = document.querySelector(".sort.low-price");
        const buttonHighPrice = document.querySelector(".sort.high-price");
        const buttonCreated = document.querySelector(".sort.created");
        const buttonView = document.querySelectorAll(".search-view");

        function removeProducts() {
            while (ul.firstChild) {
                ul.removeChild(ul.firstChild);
            }
        }

        buttonLowPrice.addEventListener("click", () => {
            removeProducts();
            let arrProducts = ascending(products);
            paintProducts(arrProducts);
        });
        buttonHighPrice.addEventListener("click", () => {
            removeProducts();
            let arrProducts = descending(products);
            paintProducts(arrProducts);
        });
        buttonCreated.addEventListener("click", () => {
            removeProducts();
            let arrProducts = newItemOrder(products);
            paintProducts(arrProducts);
        });

        for (let i = 0; i < buttonView.length; i++) {
            buttonView[i].addEventListener("click", () => {
                if (i === 0) {
                    removeProducts();
                    paintProducts(products);
                } else {
                    removeProducts();
                    setGrid(products);
                }
            });
        }

        function setGrid() {
            ul.classList.add("list-products");
            let result = products.forEach((item) => {
                const li = document.createElement("li");
                li.classList.add("list-grid");
                const productCard = new ProductCard(item);
                li.appendChild(productCard.render());
                ul.appendChild(li);
            });
            wrapper.appendChild(ul);
            return result;
        }
    }

    render() {
        this.setProductList();

        return this.wrapper;
    }
}

export default SearchList;
