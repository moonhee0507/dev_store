import ProductImage from "../common/product/productImage.js";
import { SearchInfoMain, SearchInfoSub } from "./index.js";

class SearchListItem {
    constructor(item) {
        this.item = item;
        this.div = document.createElement("div");
    }

    render() {
        const productImage = new ProductImage(
            this.item.image,
            this.item.product_id
        );
        const searchInfoMain = new SearchInfoMain(this.item);
        const searchInfoSub = new SearchInfoSub(this.item);

        this.div.appendChild(productImage.render());
        this.div.appendChild(searchInfoMain.render());
        this.div.appendChild(searchInfoSub.render());

        return this.div;
    }
}

export default SearchListItem;
