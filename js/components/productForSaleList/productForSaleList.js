import ProductInfoForSale from "../forSale/productInfoForSale.js";
import ProductPriceForSale from "../forSale/productPriceForSale.js";
import { ProductEditButton, ProductDeleteButton } from "../button/index.js";

class ProductForSaleListItem {
    constructor(item) {
        this.item = item;
        this.ul = document.createElement("ul");
    }

    render() {
        this.ul.setAttribute("class", "view-list add");
        const productInfoForSale = new ProductInfoForSale(this.item);
        const productPriceForSale = new ProductPriceForSale(this.item.price);
        const productEditButton = new ProductEditButton(this.item);
        const productDeleteButton = new ProductDeleteButton(this.item);
        let arrProductForSaleComponents = [
            productInfoForSale,
            productPriceForSale,
            productEditButton,
            productDeleteButton,
        ];

        for (let i = 0; i < arrProductForSaleComponents.length; i++) {
            const li = document.createElement("li");
            li.appendChild(arrProductForSaleComponents[i].render());
            this.ul.appendChild(li);
        }

        return this.ul;
    }
}

export default ProductForSaleListItem;
