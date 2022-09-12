import { ProductSeller, ProductShipping } from "../product/index.js";
import SellerItemQuantity from "../sellerItemQuantity/sellerItemQuantity.js";

class SearchInfoSub {
    constructor(item) {
        this.item = item;
        this.ul = document.createElement("ul");
    }

    render() {
        this.ul.setAttribute("class", "search-seller-info");

        const productSeller = new ProductSeller(
            this.item.seller_store,
            this.item.seller
        );
        const sellerItemQuantity = new SellerItemQuantity(
            this.item.seller_store,
            this.item.seller
        ); // Int
        const productShipping = new ProductShipping(
            this.item.shipping_method,
            this.item.shipping_fee
        );

        let arrInfo = [productSeller, sellerItemQuantity, productShipping];

        for (let i = 0; i < arrInfo.length; i++) {
            const li = document.createElement("li");
            li.appendChild(arrInfo[i].render());
            this.ul.appendChild(li);
        }
        return this.ul;
    }
}

export default SearchInfoSub;
