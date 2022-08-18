import {
    ProductImage,
    ProductSeller,
    ProductPrice,
    ProductName,
    ProductShipping,
    ProductQuantity,
    ProductTotal,
} from "../product/index.js";
import { BuyNowButton, CartButton } from "../button/index.js";

class ProductInfoCard {
    constructor(info) {
        this.ul = document.createElement("ul");
        this.info = info;
        console.log(this.info);
    }

    render() {
        const productImage = new ProductImage(this.info.image);

        this.ul.setAttribute("class", "product-detail-list");

        const productSeller = new ProductSeller(this.info.seller_store);
        const productName = new ProductName(this.info.product_name);
        const productPrice = new ProductPrice(this.info.price);
        const productShipping = new ProductShipping(
            this.info.shipping_method,
            this.info.shipping_fee
        );

        // quantity
        const li = document.createElement("li");
        const productQuantity = new ProductQuantity(
            this.info.stock,
            this.info.price
        );
        li.append(productQuantity.render());

        // total
        const productTotal = new ProductTotal(this.info.stock, this.info.price);

        // button
        const buyNowButton = new BuyNowButton();
        const cartButton = new CartButton();

        document
            .querySelector(".style-wrapper-detail")
            .appendChild(productImage.render());
        document.querySelector(".style-wrapper-detail").appendChild(this.ul);
        this.ul.appendChild(productSeller.render());
        this.ul.appendChild(productName.render());
        this.ul.appendChild(productPrice.render());
        this.ul.appendChild(productShipping.render());
        this.ul.appendChild(li);
        this.ul.appendChild(productTotal.render());
        this.ul.appendChild(buyNowButton.render());
        this.ul.appendChild(cartButton.render());

        return this.ul;
    }
}

export default ProductInfoCard;
