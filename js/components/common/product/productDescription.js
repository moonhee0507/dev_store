class ProductDescription {
    constructor(info) {
        this.info = info;
        this.p = document.createElement("p");
    }

    render() {
        this.p.setAttribute("class", "search-txt-productinfo");
        this.p.innerText = this.info;

        return this.p;
    }
}

export default ProductDescription;
