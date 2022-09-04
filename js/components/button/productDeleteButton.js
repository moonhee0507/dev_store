class ProductDeleteButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("class", "button-center-delete");
        this.button.innerText = "삭제";

        return this.button;
    }
}

export default ProductDeleteButton;
