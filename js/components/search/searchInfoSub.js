import { ProductSeller, ProductShipping } from "../common/product/index.js";

class SearchInfoSub {
    constructor(item) {
        this.item = item;
        this.ul = document.createElement("ul");
    }

    render() {
        this.ul.setAttribute("class", "search-seller-info");

        const productSeller = new ProductSeller(
            this.item.store_name,
            this.item.seller
        );

        const productShipping = new ProductShipping(
            this.item.shipping_method,
            this.item.shipping_fee
        );

        let arrInfo = [productSeller, productShipping];

        for (let i = 0; i < arrInfo.length; i++) {
            const li = document.createElement("li");
            li.appendChild(arrInfo[i].render());
            this.ul.appendChild(li);
        }
        return this.ul;
    }
}

export default SearchInfoSub;
