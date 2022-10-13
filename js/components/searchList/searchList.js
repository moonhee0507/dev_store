import getProducts from "../../common/api.js";
import { ascending, descending, newItemOrder } from "../../common/sort.js";
import SearchListItem from "./searchListItem.js";
import ProductCard from "../productCard/productCard.js";
import NotMatchMessage from "../notMatchMessage/notMatchMessage.js";

class SearchList {
    constructor() {
        this.wrapper = document.createElement("div");
        this.results = {};
        this.productsOnAllPages = [];
    }

    async getProductData() {
        let count = parseInt(window.localStorage.getItem("count"));
        for (let i = 1; i < count / 15 + 1; i++) {
            const data = await getProducts(i, false);
            this.results = await data.results.filter((el) => {
                let keyword = document.getElementById("searchProducts").value;
                return el.product_name.includes(keyword);
            });
            this.productsOnAllPages.push(...this.results);
        }
    }

    async setProductList() {
        await this.getProductData();
        if (this.productsOnAllPages.length === 0) {
            const notMatchMessage = new NotMatchMessage();
            this.wrapper.appendChild(notMatchMessage.render());
        }

        this.wrapper.setAttribute("class", "style-wrapper-search");
        let products = this.productsOnAllPages;
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
