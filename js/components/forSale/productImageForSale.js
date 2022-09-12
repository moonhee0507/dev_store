class ProductImageForSale {
    constructor(id, image) {
        this.id = id;
        this.image = image;
        this.wrapper = document.createElement("div");
    }

    render() {
        this.wrapper.setAttribute("class", "center-img-wrapper");
        this.wrapper.setAttribute("title", "바로가기");
        const img = document.createElement("img");
        img.setAttribute("class", "center-img");
        img.setAttribute("src", this.image);
        img.setAttribute("alt", "상품 이미지");
        this.wrapper.appendChild(img);

        this.wrapper.addEventListener("click", () => {
            window.location.href = `/products/${this.id}`;
        });

        return this.wrapper;
    }
}

export default ProductImageForSale;
