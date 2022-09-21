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
        product.setAttribute("class", "link-product");
        product.setAttribute("href", `/products/${this.item.product_id}`);

        const productImage = new ProductImage(
            this.item.image,
            this.item.product_id
        );
        const styleWrapperSNP = document.createElement("div");
        styleWrapperSNP.setAttribute("class", "style-wrapper-SNP");
        const productSeller = new ProductSeller(this.item.store_name);
        const productName = new ProductName(this.item.product_name);
        const productPrice = new ProductPrice(this.item.price);

        product.appendChild(productImage.render());
        product.appendChild(styleWrapperSNP);
        styleWrapperSNP.append(
            productSeller.render(),
            productName.render(),
            productPrice.render()
        );

        return product;
    }
}

export default ProductItem;
