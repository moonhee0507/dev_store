import {
    UploadProductName,
    UploadPrice,
    UploadShippingMethod,
    UploadShippingFee,
    UploadStock,
} from "./index.js";

class UploadDetail {
    constructor() {
        this.container = document.createElement("div");
    }

    render() {
        this.container.setAttribute("class", "style-container-upload-inputs");

        const uploadProductName = new UploadProductName();
        const uploadPrice = new UploadPrice();
        const uploadShippingMethod = new UploadShippingMethod();
        const uploadShippingFee = new UploadShippingFee();
        const uploadStock = new UploadStock();

        this.container.appendChild(uploadProductName.render());
        this.container.appendChild(uploadPrice.render());
        this.container.appendChild(uploadShippingMethod.render());
        this.container.appendChild(uploadShippingFee.render());
        this.container.appendChild(uploadStock.render());

        return this.container;
    }
}

export default UploadDetail;
