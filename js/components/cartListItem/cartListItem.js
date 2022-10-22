import { getProductsDetail } from "../../common/api.js";
import { ProductQuantity, ProductTotal } from "../product/index.js";
import { ProductInfoCard } from "../productInfoCard/index.js";

class CartListItem {
    constructor(item) {
        this.item = item;
        this.wrapper = document.createElement("div");
        this.cartItem = {};
    }
    async getProductData() {
        const data = await getProductsDetail(this.item.product_id);
        this.cartItem = await data;
    }
    async setCart() {
        await this.getProductData();

        this.wrapper.setAttribute(
            "class",
            this.cartItem.stock === 0
                ? "wrapper-cart-product soldout"
                : "wrapper-cart-product"
        );
        const closeButton = document.createElement("button");
        closeButton.setAttribute("class", "button-close-cart");

        const checkButton = document.createElement("button");
        checkButton.setAttribute("class", "button-cart-check fill");

        const productInfoCard = new ProductInfoCard(this.cartItem);

        const productQuantity = new ProductQuantity(
            this.cartItem.stock,
            this.cartItem.price,
            this.item.quantity,
            this.item.cart_item_id,
            this.item.is_active,
            this.item.product_id
        );

        const productTotal = new ProductTotal(
            this.cartItem.stock,
            this.cartItem.price,
            this.item.quantity,
            this.item.product_id
        );

        this.wrapper.appendChild(closeButton);
        this.wrapper.appendChild(checkButton);
        this.wrapper.appendChild(productInfoCard.render());
        this.wrapper.appendChild(productQuantity.render());
        this.wrapper.appendChild(productTotal.render());

        checkButton.addEventListener("click", () => {
            checkButton.classList.toggle("fill");
        });

        const allCheckBox = document.querySelectorAll(".button-cart-check");
        let itemAllCheck = false;

        for (let i = 0; i < allCheckBox.length; i++) {
            allCheckBox[0].addEventListener("click", () => {
                if (allCheckBox[0].className.includes("fill")) {
                    this.cartItem.stock !== 0 &&
                        allCheckBox[i].classList.add("fill");
                    itemAllCheck = true;
                } else {
                    allCheckBox[1].classList.remove("fill");
                    allCheckBox[i] && allCheckBox[i].classList.remove("fill");
                    itemAllCheck = false;
                }
            });

            allCheckBox[i].addEventListener("click", () => {
                const arrAllCheckBox = Array.from(allCheckBox);
                const arrClassNameAllCheckBox = arrAllCheckBox.map(
                    (item) => item.className
                );
                arrClassNameAllCheckBox.shift();

                let everyElHasFill = arrClassNameAllCheckBox.every((el) => {
                    return el.includes("fill");
                });

                if (itemAllCheck) {
                    !allCheckBox[i].className.includes("fill") &&
                        allCheckBox[0].classList.remove("fill");
                    itemAllCheck = false;
                } else {
                    everyElHasFill
                        ? allCheckBox[0].classList.add("fill")
                        : allCheckBox[0].classList.remove("fill");
                }
            });
        }
        if (this.cartItem.stock === 0) {
            checkButton.setAttribute("class", "button-cart-check");
            checkButton.style.cursor = "default";
            checkButton.disabled = true;
        }
    }

    render() {
        this.setCart();

        return this.wrapper;
    }
}
export default CartListItem;
