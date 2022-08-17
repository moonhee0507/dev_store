class ShoppingBagButton {
    constructor() {
        this.a = document.createElement("a");
    }

    render() {
        this.a.setAttribute("href", "");
        this.a.setAttribute("class", "link-shopping-bag");
        this.a.innerText = "장바구니";

        return this.a;
    }
}

export default ShoppingBagButton;
