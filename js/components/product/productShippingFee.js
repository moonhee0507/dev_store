class ProductShippingFee {
    constructor(shippingFee) {
        this.shippingFee = shippingFee;
    }

    render() {
        const m = document.createElement("h1");
        m.innerText = this.shippingFee;

        return m;
    }
}

export default ProductShippingFee;
