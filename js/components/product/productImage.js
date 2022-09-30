class ProductImage {
    constructor(src, id) {
        this.src = src; // Home, Detail
        this.id = id; // Cart, Payment
        this.wrapper = document.createElement("div");
    }

    render() {
        const productImg = document.createElement("img");
        const url = window.location.pathname;
        productImg.setAttribute("class", "img-product");
        productImg.setAttribute("alt", "상품이미지");
        productImg.setAttribute("loading", "lazy");

        if (url === "/" || url.includes("/store")) {
            this.wrapper.setAttribute("class", "style-wrapper-img card");
            productImg.setAttribute("src", `${this.src}`);
        } else if (url.includes("/products/")) {
            this.wrapper.setAttribute("class", "style-wrapper-img large");
            productImg.setAttribute("src", `${this.src}`);
        } else if (url === "/cart") {
            this.wrapper.setAttribute("class", "style-wrapper-img small");
            this.wrapper.addEventListener("click", () => {
                window.location.href = `/products/${this.id}`;
            });
            productImg.setAttribute("src", `${this.src}`);
        } else if (
            url === "/payment" &&
            window.localStorage.getItem("path") === "1"
        ) {
            this.wrapper.setAttribute("class", "style-wrapper-img small");
            productImg.setAttribute(
                "src",
                JSON.parse(window.localStorage.getItem("fromDetail")).src
            );
            this.wrapper.addEventListener("click", () => {
                window.location.href = `/products/${this.id}`;
            });
        } else if (
            url === "/payment" &&
            window.localStorage.getItem("path") === "2"
        ) {
            this.wrapper.setAttribute("class", "style-wrapper-img small");
            productImg.setAttribute("src", this.src);
        } else if (
            url === "/payment" &&
            window.localStorage.getItem("path") === "3"
        ) {
            this.wrapper.setAttribute("class", "style-wrapper-img small");
            productImg.setAttribute(
                "src",
                JSON.parse(window.localStorage.getItem("fromCartOne"))[0].src
            );
        } else if (url.includes("/search")) {
            let isGrid = window.localStorage.getItem("grid") ? true : false;
            if (isGrid) {
                this.wrapper.setAttribute("class", "style-wrapper-img card");
            } else {
                this.wrapper.setAttribute("class", "style-wrapper-img small");
            }
            productImg.setAttribute("src", this.src);
        }

        this.wrapper.appendChild(productImg);

        return this.wrapper;
    }
}

export default ProductImage;
