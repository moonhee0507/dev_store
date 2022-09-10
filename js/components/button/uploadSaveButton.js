import { API_URL } from "../../common/constants";

class UploadSaveButton {
    constructor() {
        this.button = document.createElement("button");
    }

    render() {
        const storageEdit = JSON.parse(window.localStorage.getItem("edit"));

        this.button.setAttribute("type", "submit");
        this.button.setAttribute("class", "button-upload-save");
        window.localStorage.getItem("edit")
            ? (this.button.innerText = "수정하기")
            : (this.button.innerText = "저장하기");

        this.button.addEventListener("click", (e) => {
            e.preventDefault();

            const fileInput = document.getElementById("product-img");
            const image = fileInput.files[0];

            const product_name = document.querySelector(
                "#input-upload-productname"
            ).value;

            const price = parseInt(
                document
                    .querySelector("#input-upload-price")
                    .value.replace(/\D/g, "")
            );

            const shipping_method = storageEdit
                ? storageEdit.shipping_method
                : window.localStorage.getItem("shipping_method");

            const shipping_fee = parseInt(
                document
                    .querySelector("#input-upload-shippingfee")
                    .value.replace(/\D/g, "")
            );

            const stock = parseInt(
                document
                    .querySelector("#input-upload-stock")
                    .value.replace(/\D/g, "")
            );

            const product_info =
                document.querySelector("#upload-textarea").value;

            const token = window.localStorage.getItem("token");

            const formData = new FormData();
            image && formData.append("image", image);
            formData.append("product_name", product_name);
            formData.append("price", price);
            formData.append("shipping_method", shipping_method);
            formData.append("shipping_fee", shipping_fee);
            formData.append("stock", stock);
            formData.append("product_info", product_info);
            formData.append("token", token);

            save(formData);
        });

        const id = parseInt(storageEdit?.product_id);
        async function save(formData) {
            await fetch(`${API_URL}/products/${id ? id + "/" : ""}`, {
                method: id ? "PATCH" : "POST",
                headers: {
                    Authorization: `JWT ${window.localStorage.getItem(
                        "token"
                    )}`,
                },
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.product_id) {
                        setTimeout(() => {
                            window.location.pathname = `/products/${data.product_id}`;
                        }, 1000);
                        window.localStorage.removeItem("edit");
                        window.localStorage.removeItem("shipping_method");
                    } else {
                        alert("error");
                    }
                })
                .catch((e) => console.error(e));
        }

        return this.button;
    }
}

export default UploadSaveButton;
