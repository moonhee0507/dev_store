import { API_URL } from "../../common/constants";
import SearchListItem from "./searchListItem";
import { ascending, descending } from "../../common/sort";

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

        paintProducts(products);

        function paintProducts(products) {
            let result = products.forEach((item) => {
                const ul = document.createElement("ul");
                ul.setAttribute("class", "list-search-items");
                const searchListItem = new SearchListItem(item);
                ul.appendChild(searchListItem.render());
                wrapper.appendChild(ul);
            });
            return result;
        }

        const buttonLowPrice = document.querySelector(".sort.low-price");
        const buttonHighPrice = document.querySelector(".sort.high-price");
        const buttonCreated = document.querySelector(".sort.created");
        const productGroup = document.querySelector(".style-wrapper-search");

        function removeProducts() {
            while (productGroup.firstChild) {
                productGroup.removeChild(productGroup.firstChild);
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
    }

    render() {
        this.setProductList();

        return this.wrapper;
    }
}

export default SearchList;
