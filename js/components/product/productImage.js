class ProductImage {
    constructor(src, id) {
        this.src = src; // Home, Detail
        this.id = id; // Cart, Payment
        this.wrapper = document.createElement("div");
    }

    render() {
        const productImg = document.createElement("img");
        productImg.setAttribute("class", "img-product");
        productImg.setAttribute("alt", "상품이미지");

        if (window.location.pathname === "/") {
            this.wrapper.setAttribute("class", "style-wrapper-img");
            productImg.setAttribute("src", `${this.src}`);
        } else if (window.location.pathname.includes("/products/")) {
            this.wrapper.setAttribute("class", "style-wrapper-img large");
            productImg.setAttribute("src", `${this.src}`);
        } else if (window.location.pathname === "/cart") {
            this.wrapper.setAttribute("class", "style-wrapper-img small");
            this.wrapper.addEventListener("click", () => {
                window.location.pathname = `/products/${this.id}`;
            });
            productImg.setAttribute("src", `${this.src}`);
        } else if (window.location.pathname === "/payment") {
            this.wrapper.setAttribute("class", "style-wrapper-img small");
            productImg.setAttribute(
                "src",
                JSON.parse(window.localStorage.getItem("fromDetail")).src
            );
            this.wrapper.addEventListener("click", () => {
                window.location.pathname = `/products/${this.id}`;
            });
        }

        this.wrapper.appendChild(productImg);

        return this.wrapper;
    }
}

export default ProductImage;
