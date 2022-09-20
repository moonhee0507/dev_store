import { API_URL } from "../../common/constants";
import SearchListItem from "./searchListItem";
import { ascending, descending } from "../../common/sort";
import ProductCard from "../productCard/productCard.js";

class SearchList {
    constructor() {
        this.wrapper = document.createElement("ul");
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

        paintProducts(products);

        function paintProducts(products) {
            let result = products.forEach((item) => {
                const li = document.createElement("li");
                li.setAttribute("class", "list-search-items");
                const searchListItem = new SearchListItem(item);
                li.appendChild(searchListItem.render());
                wrapper.appendChild(li);
            });
            return result;
        }

        const buttonLowPrice = document.querySelector(".sort.low-price");
        const buttonHighPrice = document.querySelector(".sort.high-price");
        const buttonCreated = document.querySelector(".sort.created");
        const buttonView = document.querySelectorAll(".search-view");

        function removeProducts() {
            while (wrapper.firstChild) {
                wrapper.removeChild(wrapper.firstChild);
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
        // TODO: 등록일순 함수 추가
        // buttonCreated.addEventListener("click", () => {

        // });

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

        // 그리드 정렬
        const listProducts = document.createElement("ul");
        listProducts.setAttribute("class", "list-products");
        function setGrid() {
            let result = products.forEach((item) => {
                const li = document.createElement("li");
                const productCard = new ProductCard(item);
                li.appendChild(productCard.render());
                listProducts.appendChild(li);
                wrapper.appendChild(listProducts);
            });
            return result;
        }
    }

    render() {
        this.setProductList();

        return this.wrapper;
    }
}

export default SearchList;
