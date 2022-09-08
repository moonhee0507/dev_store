import { API_URL } from "../../common/constants";

class ProductEditButton {
    constructor(id) {
        this.id = id;
        this.button = document.createElement("button");
    }

    render() {
        this.button.setAttribute("class", "button-center-edit");
        this.button.innerText = "수정";

        this.button.addEventListener("click", () => {
            getProductsData();
            setTimeout(() => {
                window.location.pathname = "/upload";
            }, 1000);
        });

        const id = this.id;
        async function getProductsData() {
            const res = await fetch(`${API_URL}/products/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await res.json();
            window.localStorage.setItem("edit", JSON.stringify(data));
        }

        return this.button;
    }
}

export default ProductEditButton;
