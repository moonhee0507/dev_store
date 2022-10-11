import { API_URL } from "../../common/constants";
import CartListItem from "../cartListItem/cartListItem";
import ChangeQuantity from "../modal/changeQuantity";
import DeleteItemModal from "../modal/deleteItemModal";
import NoCart from "../noCart/noCart";

class CartList {
    constructor() {
        this.sectionElement = document.createElement("section");
        this.cart = {};
    }
    async getCartData() {
        const res = await fetch(`${API_URL}/cart/`, {
            method: "GET",
            headers: {
                Authorization: `JWT ${window.localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        this.cart = await data;
        const arr = new Array();
        for (let i = 0; i < this.cart.count; i++) {
            const cartItems = new Object();
            cartItems.productId = `${this.cart.results[i].product_id}`;
            cartItems.selectedQt = `${this.cart.results[i].quantity}`;
            cartItems.checked = "true";
            arr.push(cartItems);
        }
        localStorage.setItem("fromCartItems", JSON.stringify(arr));
    }
    async setCartData() {
        await this.getCartData();
        this.sectionElement.classList.add("section-cart");

        const h2 = document.createElement("h2");
        h2.setAttribute("class", "title-cart");
        h2.innerText = "장바구니";

        const cartRow = document.createElement("div");
        cartRow.setAttribute("class", "cart-row");
        const cartRowList = document.createElement("ul");
        cartRowList.setAttribute("class", "cart-row-list");

        const col1 = document.createElement("li");
        const buttonCartCheck = document.createElement("button");
        buttonCartCheck.setAttribute("type", "button");
        buttonCartCheck.setAttribute("class", "button-cart-check fill");
        const col2 = document.createElement("li");
        col2.innerText = "상품정보";
        const col3 = document.createElement("li");
        col3.innerText = "수량";
        const col4 = document.createElement("li");
        col4.innerText = "상품금액";

        const cartProducts = document.createElement("div");
        cartProducts.classList.add("cart-products");

        if (this.cart.count !== 0) {
            this.cart.results.forEach((item) => {
                const cartProduct = document.createElement("div");
                const cartListItem = new CartListItem(item);
                const changeQuantity = new ChangeQuantity(item);
                const deleteItemModal = new DeleteItemModal(item.cart_item_id);
                const changeModalGroup = document.querySelector(
                    ".change-modal-group"
                );
                const deleteModalGroup = document.querySelector(
                    ".delete-modal-group"
                );
                changeModalGroup.appendChild(changeQuantity.render());
                deleteModalGroup.appendChild(deleteItemModal.render());
                cartProduct.appendChild(cartListItem.render());
                cartProducts.appendChild(cartProduct);
            });
        } else {
            const noCart = new NoCart();
            cartProducts.appendChild(noCart.render());
            document.querySelector(".wrapper-cart-total").style.display =
                "none";
            document.querySelector(".button-buy.middle").style.display = "none";
        }

        col1.appendChild(buttonCartCheck);
        cartRowList.append(col1, col2, col3, col4);
        cartRow.appendChild(cartRowList);
        this.sectionElement.append(h2, cartRow, cartProducts);
        buttonCartCheck.addEventListener("click", () => {
            buttonCartCheck.classList.toggle("fill");
        });
    }

    render() {
        this.setCartData();

        return this.sectionElement;
    }
}

export default CartList;
