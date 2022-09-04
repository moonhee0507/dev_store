class ProductEditButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("class", "button-center-edit");
        this.button.innerText = "수정";

        return this.button;
    }
}

export default ProductEditButton;
