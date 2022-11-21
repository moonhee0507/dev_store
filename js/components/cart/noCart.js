class NoCart {
    constructor() {
        this.div = document.createElement("div");
    }

    render() {
        this.div.setAttribute("class", "style-wrapper-nocart");

        const txtNoCart = document.createElement("strong");
        const txtAddCart = document.createElement("p");
        txtNoCart.setAttribute("class", "txt-nocart");
        txtNoCart.innerText = "장바구니에 담긴 상품이 없습니다.";
        txtAddCart.setAttribute("class", "txt-add-cart");
        txtAddCart.innerText = "원하는 상품을 장바구니에 담아보세요!";

        this.div.append(txtNoCart, txtAddCart);

        return this.div;
    }
}
export default NoCart;
