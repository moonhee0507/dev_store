class SellerInfoButton {
    constructor(seller) {
        this.seller = seller;
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("class", "button-seller-info");
        this.button.setAttribute("type", "button");
        this.button.innerText = "정보";

        return this.button;
    }
}

export default SellerInfoButton;
