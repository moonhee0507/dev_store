class ProductDeleteButton {
    constructor(id) {
        this.id = id;
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("class", "button-center-delete");
        this.button.innerText = "삭제";

        this.button.addEventListener("click", () => {
            const modal = this.button.parentElement.nextSibling.firstChild;
            modal.classList.add("show");
            if (modal.classList.contains("show")) {
                const body = document.querySelector("body");
                body.style.overflow = "hidden";
            }
            console.log(this.id);
        });

        return this.button;
    }
}

export default ProductDeleteButton;
