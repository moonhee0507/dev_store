import { API_URL } from "../../common/constants";
import CartListItem from "../cartListItem/cartListItem";

class CartList {
    constructor() {
        this.sectionElement = document.createElement("section");
        this.cart = {};
    }

    // 장바구니 목록 불러오기
    async getCartData() {
        const res = await fetch(`${API_URL}/cart/`, {
            method: "GET",
            headers: {
                Authorization: `JWT ${window.localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();

        this.cart = await data.results;
        console.log(this.cart);
    }

    // 장바구니 내용 세팅하기
    async setCartData() {
        await this.getCartData();
        console.log(this.cart);
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

        this.cart.forEach((item) => {
            const cartProduct = document.createElement("div");
            const cartListItem = new CartListItem(item);
            cartProduct.appendChild(cartListItem.render());
            cartProducts.appendChild(cartProduct);
        });

        col1.appendChild(buttonCartCheck);
        cartRowList.append(col1, col2, col3, col4);
        cartRow.appendChild(cartRowList);
        this.sectionElement.append(h2, cartRow, cartProducts);

        // 체크박스 토글
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
