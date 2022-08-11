import {
    ProductImage,
    ProductSeller,
    ProductPrice,
    ProductName,
} from "../product/index.js";

class ProductItem {
    constructor(item) {
        this.item = item;
    }

    render() {
        const product = document.createElement("a");
        product.setAttribute("href", `/products/${this.item.product_id}`);

        const productImage = new ProductImage(this.item.image);
        const productSeller = new ProductSeller(this.item.seller_store);
        const productName = new ProductName(this.item.product_name);
        const productPrice = new ProductPrice(this.item.price);

        product.appendChild(productImage.render());
        product.appendChild(productSeller.render());
        product.appendChild(productName.render());
        product.appendChild(productPrice.render());

        return product;
    }
}

export default ProductItem;
