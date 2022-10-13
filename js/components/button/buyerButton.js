class BuyerButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("type", "button");
        this.button.setAttribute("class", "button-buyer on");
        this.button.setAttribute("name", "button-buyer");
        this.button.setAttribute("value", "BUYER");
        this.button.innerText = "구매회원 로그인";

        return this.button;
    }
}

export default BuyerButton;
