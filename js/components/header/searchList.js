import { API_URL } from "../../common/constants";
import SearchListItem from "./searchListItem";

class SearchList {
    constructor(keyword) {
        this.keyword = keyword;
        this.ul = document.createElement("ul");
        this.products = {};
    }

    async getItems() {
        const res = await fetch(`${API_URL}/products`);
        const resJson = await res.json();
        this.products = await resJson.results.filter((el) => {
            return el.product_name.includes(this.keyword);
        });
    }

    async setItems() {
        await this.getItems();
        this.ul.setAttribute("class", "list-match");
        this.products.forEach((item) => {
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
