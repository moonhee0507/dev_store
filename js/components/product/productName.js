class ProductName {
    constructor(name) {
        this.name = name;
    }

    render() {
        // 상품명
        const productName = document.createElement("strong");
        productName.innerText = this.name;

        return productName;
    }
}

export default ProductName;
