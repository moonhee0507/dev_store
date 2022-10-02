import {
    ProductImage,
    ProductSeller,
    ProductShipping,
    RegistrationDate,
    ProductPrice,
    ProductName,
} from "../product/index.js";

class ProductCard {
    constructor(item) {
        this.item = item;
    }

    render() {
        const product = document.createElement("a");
        product.setAttribute("class", "link-product");
        const productImage = new ProductImage(
            this.item.image,
            this.item.product_id
        );
        const styleWrapperSNP = document.createElement("div");
        styleWrapperSNP.setAttribute("class", "style-wrapper-SNP");
        const productSeller = new ProductSeller(
            this.item.store_name,
            this.item.seller
        );
        const productName = new ProductName(this.item.product_name);

        const containerDateShippingPrice = document.createElement("div");
        containerDateShippingPrice.setAttribute(
            "class",
            "container-date-shipping-price"
        );
        const containerShippingPrice = document.createElement("div");
        containerShippingPrice.setAttribute(
            "class",
            "container-shipping-price"
        );

        const registrationDate = new RegistrationDate(
            this.item.product_id,
            this.item.created_at,
            this.item.updated_at
        );
        const productShipping = new ProductShipping(
            this.item.shipping_method,
            this.item.shipping_fee
        );
        const productPrice = new ProductPrice(this.item.price);

        product.appendChild(productImage.render());
        product.appendChild(styleWrapperSNP);
        containerDateShippingPrice.append(
            registrationDate.render(),
            containerShippingPrice
        );
        containerShippingPrice.append(
            productShipping.render(),
            productPrice.render()
        );
        styleWrapperSNP.append(
            productSeller.render(),
            productName.render(),
            containerDateShippingPrice
        );

        product.addEventListener("click", (e) => {
            let circle = document.createElement("span");
            product.appendChild(circle);

            // let x = e.clientX - e.target.offsetLeft;
            let x = e.layerX;
            // let y = e.clientY - e.target.offsetTop;
            let y = e.layerY;

            circle.style.left = `${x}px`;
            circle.style.top = `${y}px`;

            setTimeout(() => {
                circle.remove();
                window.location.href = `/products/${this.item.product_id}`;
            }, 500);
        });

        return product;
    }
}

export default ProductCard;
