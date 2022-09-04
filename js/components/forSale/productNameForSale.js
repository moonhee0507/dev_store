class ProductNameForSale {
    constructor(name) {
        this.name = name;
        this.strong = document.createElement("strong");
    }

    render() {
        this.strong.setAttribute("class", "center-txt-product");
        this.strong.innerText = this.name;

        return this.strong;
    }
}

export default ProductNameForSale;
