import { getProductsDetail } from "../../common/api.js";

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
                window.location.href = "/upload";
            }, 1000);
        });

        const id = this.id;
        async function getProductsData() {
            const data = await getProductsDetail(id);
            delete data.seller;
            delete data.store_name;
            window.localStorage.setItem("edit", JSON.stringify(data));
        }

        return this.button;
    }
}

export default ProductEditButton;
