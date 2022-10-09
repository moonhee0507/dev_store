import getProducts from "../../common/api.js";
import SearchListItem from "./searchListItem";

class SearchList {
    constructor(keyword) {
        this.keyword = keyword;
        this.ul = document.createElement("ul");
        this.products = {};
        this.productsOnAllPages = [];
    }

    async getItems() {
        let count = parseInt(window.localStorage.getItem("count"));
        for (let i = 1; i < count / 15 + 1; i++) {
            const data = await getProducts(i, false);
            this.products = await data.results.filter((el) => {
                return el.product_name.includes(this.keyword);
            });
            this.productsOnAllPages.push(...this.products);
        }
    }

    async setItems() {
        await this.getItems();
        this.ul.setAttribute("class", "list-match");
        this.productsOnAllPages.forEach((item) => {
            const searchItem = document.createElement("li");
            const searchListItem = new SearchListItem(this.keyword, item);
            searchItem.appendChild(searchListItem.render());
            this.ul.appendChild(searchItem);
        });
    }

    render() {
        this.setItems();

        return this.ul;
    }
}

export default SearchList;
