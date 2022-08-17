class BuyNowButton {
    constructor() {
        this.a = document.createElement("a");
    }

    render() {
        this.a.setAttribute("href", "");
        this.a.setAttribute("class", "link-buy");
        this.a.innerText = "바로 구매";

        return this.a;
    }
}

export default BuyNowButton;
