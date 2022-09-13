import ProductImage from "../product/productImage.js";
import SearchInfoMain from "../searchInfoMain/searchInfoMain.js";
import SearchInfoSub from "../searchInfoSub/searchInfoSub.js";

class SearchListItem {
    constructor(item) {
        this.item = item;
        this.li = document.createElement("li");
    }

    render() {
        const productImage = new ProductImage(this.item.image);
        const searchInfoMain = new SearchInfoMain(this.item);
        const searchInfoSub = new SearchInfoSub(this.item);

        this.li.appendChild(productImage.render());
        this.li.appendChild(searchInfoMain.render());
        this.li.appendChild(searchInfoSub.render());

        return this.li;
    }
}

export default SearchListItem;
