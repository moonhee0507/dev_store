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
        this.infoWrapper = document.createElement("div");
        this.info = info; // Home, Detail, cart, payment
    }

    render() {
        // 상품 상세페이지
        if (window.location.pathname.includes("/products/")) {
            const ul = document.createElement("ul");
            ul.setAttribute("class", "product-detail-list");
            const productImage = new ProductImage(
                this.info.image,
                this.info.product_id
            );

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
            const productTotal = new ProductTotal(
                this.info.stock,
                this.info.price
            );

            // button
            const buyNowButton = new BuyNowButton(this.info.stock);
            const cartButton = new CartButton(this.info.product_id);

            document
                .querySelector(".style-wrapper-detail")
                .appendChild(productImage.render());
            document.querySelector(".style-wrapper-detail").appendChild(ul);
            ul.appendChild(productSeller.render());
            ul.appendChild(productName.render());
            ul.appendChild(productPrice.render());
            ul.appendChild(productShipping.render());
            ul.appendChild(li);
            ul.appendChild(productTotal.render());
            this.infoWrapper.appendChild(ul);
            this.infoWrapper.appendChild(buyNowButton.render());
            this.infoWrapper.appendChild(cartButton.render());

            // 장바구니 페이지
        } else if (window.location.pathname === "/cart") {
            this.infoWrapper.setAttribute("class", "cart-product-info-col");
            const cartDetailList = document.createElement("ul");
            cartDetailList.setAttribute("class", "cart-detail-list");

            const productImage = new ProductImage(
                this.info.image,
                this.info.product_id
            );
            const productSeller = new ProductSeller(this.info.seller_store);
            const productName = new ProductName(this.info.product_name);
            const productPrice = new ProductPrice(this.info.price);
            const productShipping = new ProductShipping(
                this.info.shipping_method,
                this.info.shipping_fee
            );
            this.infoWrapper.append(productImage.render());
            this.infoWrapper.append(cartDetailList);
            cartDetailList.append(productSeller.render());
            cartDetailList.append(productName.render());
            cartDetailList.append(productPrice.render());
            cartDetailList.append(productShipping.render());

            // 상품 상세(path1)에서 유입
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "1"
        ) {
            const productImage = new ProductImage();

            const ul = document.createElement("ul");
            ul.setAttribute("class", "payment-detail-list");
            const productSeller = new ProductSeller();
            const productName = new ProductName();
            const quantityList = document.createElement("li");

            // 주문수량
            const paymentTxtQuantity = document.createElement("p");
            paymentTxtQuantity.setAttribute("class", "payment-txt-quantity");
            paymentTxtQuantity.innerText = "수량 : ";
            const paymentNumQuantity = document.createElement("span");
            paymentNumQuantity.setAttribute("class", "payment-num-quantity");
            paymentNumQuantity.innerText = JSON.parse(
                window.localStorage.getItem("fromDetail")
            ).selectedQt;
            paymentTxtQuantity.appendChild(paymentNumQuantity);
            quantityList.appendChild(paymentTxtQuantity);
            ul.append(
                productSeller.render(),
                productName.render(),
                quantityList
            );
            this.infoWrapper.append(productImage.render());
            this.infoWrapper.append(ul);
            // 장바구니(path2)에서 유입
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "2"
        ) {
            const productImage = new ProductImage(this.info.src);

            const ul = document.createElement("ul");
            ul.setAttribute("class", "payment-detail-list");
            const productSeller = new ProductSeller(this.info.sellerName);
            const productName = new ProductName(this.info.productName);
            const quantityList = document.createElement("li");

            // 주문수량
            const paymentTxtQuantity = document.createElement("p");
            paymentTxtQuantity.setAttribute("class", "payment-txt-quantity");
            paymentTxtQuantity.innerText = "수량 : ";
            const paymentNumQuantity = document.createElement("span");
            paymentNumQuantity.setAttribute("class", "payment-num-quantity");
            paymentNumQuantity.innerText = this.info.selectedQt;
            paymentTxtQuantity.appendChild(paymentNumQuantity);
            quantityList.appendChild(paymentTxtQuantity);
            ul.append(
                productSeller.render(),
                productName.render(),
                quantityList
            );
            this.infoWrapper.append(productImage.render());
            this.infoWrapper.append(ul);
            // 장바구니(path3)에서 유입
        } else if (
            window.location.pathname === "/payment" &&
            window.localStorage.getItem("path") === "3"
        ) {
            const productImage = new ProductImage();

            const ul = document.createElement("ul");
            ul.setAttribute("class", "payment-detail-list");
            const productSeller = new ProductSeller();
            const productName = new ProductName();
            const quantityList = document.createElement("li");

            // 주문수량
            const paymentTxtQuantity = document.createElement("p");
            paymentTxtQuantity.setAttribute("class", "payment-txt-quantity");
            paymentTxtQuantity.innerText = "수량 : ";
            const paymentNumQuantity = document.createElement("span");
            paymentNumQuantity.setAttribute("class", "payment-num-quantity");
            paymentNumQuantity.innerText = JSON.parse(
                window.localStorage.getItem("fromCartOne")
            )[0].selectedQt;
            paymentTxtQuantity.appendChild(paymentNumQuantity);
            quantityList.appendChild(paymentTxtQuantity);
            ul.append(
                productSeller.render(),
                productName.render(),
                quantityList
            );
            this.infoWrapper.append(productImage.render());
            this.infoWrapper.append(ul);
        }

        return this.infoWrapper;
    }
}

export default ProductInfoCard;
