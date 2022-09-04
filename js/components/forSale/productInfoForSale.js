import {
    ProductImageForSale,
    ProductNameForSale,
    ProductStockForSale,
} from "./index.js";

class ProductInfoForSale {
    constructor(item) {
        this.item = item;
        this.styleContainer = document.createElement("div");
    }

    render() {
        this.styleContainer.setAttribute(
            "class",
            "style-container-center-col1"
        );

        const productImageForSale = new ProductImageForSale(
            this.item.product_id,
            this.item.image
        );

        const nameStockWrapper = document.createElement("div");
        const productNameForSale = new ProductNameForSale(
            this.item.product_name
        );
        const productStockForSale = new ProductStockForSale(this.item.stock);

        nameStockWrapper.append(
            productNameForSale.render(),
            productStockForSale.render()
        );
        this.styleContainer.append(
            productImageForSale.render(),
            nameStockWrapper
        );

        return this.styleContainer;
    }
}

export default ProductInfoForSale;
