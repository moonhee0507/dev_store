class SellerButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("type", "button");
        this.button.setAttribute("class", "button-seller help");
        this.button.setAttribute("name", "button-seller");
        this.button.setAttribute("value", "SELLER");
        this.button.innerText = "판매회원 로그인";
        return this.button;
    }
}

export default SellerButton;
